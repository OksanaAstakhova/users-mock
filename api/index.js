const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json([
        {
            userEmail: "ivan.ponomarenko@grammarly.com",
            userLocation: "Луганська область",
        },
        {
            userEmail: "igor.petrenko@grammarly.com",
            userLocation: "Одеська область",
        },
        {
            userEmail: "olena.tkachenko@grammarly.com",
            userLocation: "Кіровоградська область",
        },
        {
            userEmail: "oksana.astakhova@grammarly.com",
            userLocation: "Сумська область",
        },
        { userEmail: "sergii.gulenok@grammarly.com", userLocation: "м. Київ" },
        {
            userEmail: "oleksandr.ponomarov@grammarly.com",
            userLocation: "м. Київ",
        },
        {
            userEmail: "oleksii.ponomarov@grammarly.com",
            userLocation: "м. Київ",
        },
        {
            userEmail: "liza.gorielikova@grammarly.com",
            userLocation: "Луганська область",
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
