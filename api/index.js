const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json([
        {
            userEmail: "ivan.ponomarenko@in.com",
            userLocation: "Луганська область",
        },
        {
            userEmail: "igor.petrenko@in.com",
            userLocation: "Одеська область",
        },
        {
            userEmail: "olena.tkachenko@in.com",
            userLocation: "Кіровоградська область",
        },
        {
            userEmail: "oksana.astakhova@in.com",
            userLocation: "Сумська область",
        },
        { userEmail: "sergii.gulenok@in.com", userLocation: "м. Київ" },
        {
            userEmail: "oleksandr.ponomarov@in.com",
            userLocation: "м. Київ",
        },
        {
            userEmail: "oleksii.ponomarov@in.com",
            userLocation: "м. Київ",
        },
        {
            userEmail: "liza.gorielikova@in.com",
            userLocation: "Луганська область",
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
