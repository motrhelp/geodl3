const countryStories = [
    {
        name: "Germany",
        levels: [
            {
                type: "flag",
                text: "Germany",
                code: "de",
            },
            {
                type: "textOptions",
                beforeText: ", oficially the ",
                text: "Federal Republic of Germany",
                options: [
                    "Feodal Republic of Germany",
                    "Federal Republic of Germany",
                    "Confederation of Germany",
                    "German Conmonwealth",
                ]
            },
            {
                type: "sizeSlider",
                beforeText: ". Germany covers an area of ",
                text: "357,022 km²",
                value: 357022,
                options: [
                    "European Union",
                    "Arab League",
                    "Commonwealth of Independent States",
                    "Andean Community",
                ]
            },
            {
                type: "textOptions",
                beforeText: ". It is the most populous country in the ",
                text: "European Union",
                options: [
                    "European Union",
                    "Arab League",
                    "Commonwealth of Independent States",
                    "Andean Community",
                ]
            },
        ]
    }
]

export default countryStories;