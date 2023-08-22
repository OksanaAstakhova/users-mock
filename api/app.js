const express = require("express");
const uuid = require("uuid");
const { JOB_DURATION, DOMAIN, PORT } = require("../data/config");
const users = require("../data/users.json");
const { checkAuth } = require("../utils/checkAuth");

const app = express();

let processes = {};

app.post("/api/v1/search/jobs", (req, res) => {
    const isAuthorized = checkAuth(req.headers.authorization);

    if (!isAuthorized) {
        res.status(401).send("Unauthorized");
        return;
    }

    const id = uuid.v4();
    processes[id] = {
        state: "GATHERING_RESULTS",
    };
    setTimeout(() => {
        console.log(id, "finished");
        processes[id] = {
            state: "DONE_GATHERING_RESULTS",
            records: users,
        };
    }, JOB_DURATION);
    res.status(200).json({
        id,
        link: {
            rel: "self",
            href: `${DOMAIN}/api/v1/search/jobs/${id}`,
        },
    });
});

app.get("/api/v1/search/jobs/:id", (req, res) => {
    const isAuthorized = checkAuth(req.headers.authorization);

    if (!isAuthorized) {
        res.status(401).send("Unauthorized");
    }

    const id = req.params.id;
    const currentProcess = processes[id];

    if (currentProcess) {
        res.status(200).json(currentProcess);
    } else {
        res.status(404).send("Not found");
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
