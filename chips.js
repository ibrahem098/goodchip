let chips = [
    {
        categoryTitle: "Logic Gates",
        subs: [
            {
                title: "AND",
                List: [
                    { ic: "7408", desc: "Quad 2-Input AND Gate" },
                    { ic: "CD4081", desc: "Quad 2-Input AND Gate (CMOS)" },
                    { ic: "CD4082", desc: "Dual 4-Input AND Gate" },
                    { ic: "74LS11", desc: "Triple 3-Input AND Gate" }
                ]
            },
            {
                title: "OR",
                List: [
                    { ic: "7432", desc: "Quad 2-Input OR Gate" },
                    { ic: "CD4071", desc: "Quad 2-Input OR Gate (CMOS)" },
                    { ic: "CD4075", desc: "Triple 3-Input OR Gate" },
                    { ic: "74LS32", desc: "Quad 2-Input OR Gate" }
                ]
            },
            {
                title: "NOT",
                List: [
                    { ic: "7404", desc: "Hex Inverter" },
                    { ic: "CD4069", desc: "Hex Inverter (CMOS)" },
                    { ic: "74LS04", desc: "Hex Inverter" },
                    { ic: "CD4049", desc: "Hex Buffer/Inverter" }
                ]
            },
            {
                title: "NAND",
                List: [
                    { ic: "7400", desc: "Quad 2-Input NAND Gate" },
                    { ic: "CD4011", desc: "Quad 2-Input NAND Gate (CMOS)" },
                    { ic: "CD4023", desc: "Triple 3-Input NAND Gate" },
                    { ic: "74LS20", desc: "Dual 4-Input NAND Gate" }
                ]
            },
            {
                title: "NOR",
                List: [
                    { ic: "7402", desc: "Quad 2-Input NOR Gate" },
                    { ic: "CD4001", desc: "Quad 2-Input NOR Gate (CMOS)" },
                    { ic: "CD4025", desc: "Triple 3-Input NOR Gate" },
                    { ic: "74LS27", desc: "Triple 3-Input NOR Gate" }
                ]
            },
            {
                title: "XOR",
                List: [
                    { ic: "7486", desc: "Quad 2-Input XOR Gate" },
                    { ic: "CD4030", desc: "Quad 2-Input XOR Gate (CMOS)" },
                    { ic: "CD4070", desc: "Quad Exclusive-OR Gate" },
                    { ic: "74LS86", desc: "Quad 2-Input XOR Gate" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Counters",
        subs: [
            {
                title: "Binary",
                List: [
                    { ic: "7493", desc: "4-Bit Binary Counter" },
                    { ic: "CD4040", desc: "12-Stage Binary Ripple Counter" },
                    { ic: "CD4060", desc: "14-Stage Binary Counter/Divider" }
                ]
            },
            {
                title: "Decade",
                List: [
                    { ic: "7490", desc: "Decade Counter" },
                    { ic: "CD4017", desc: "Decade Counter/Divider" },
                    { ic: "CD4026", desc: "Decade Counter with 7-Segment Display Decoder" }
                ]
            },
            {
                title: "Up/Down",
                List: [
                    { ic: "74190", desc: "BCD Up/Down Counter" },
                    { ic: "CD4510", desc: "BCD Up/Down Counter (CMOS)" },
                    { ic: "CD4029", desc: "Binary/Decade Up/Down Counter" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Flip-Flops",
        subs: [
            {
                title: "SR",
                List: [
                    { ic: "CD4011", desc: "Configurable as SR Flip-Flop" },
                    { ic: "7400", desc: "Configurable as SR Flip-Flop" }
                ]
            },
            {
                title: "JK",
                List: [
                    { ic: "7473", desc: "Dual JK Flip-Flop with Clear" },
                    { ic: "74LS76", desc: "Dual JK Flip-Flop" }
                ]
            },
            {
                title: "D",
                List: [
                    { ic: "7474", desc: "Dual D Flip-Flop with Preset and Clear" },
                    { ic: "CD4013", desc: "Dual D Flip-Flop (CMOS)" }
                ]
            },
            {
                title: "T",
                List: [
                    { ic: "74LS74", desc: "Configurable as T Flip-Flop" },
                    { ic: "CD4027", desc: "Configurable as T Flip-Flop" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Shift Registers",
        subs: [
            {
                title: "Shift Registers",
                List: [
                    { ic: "74164", desc: "8-Bit Serial-In/Parallel-Out Shift Register" },
                    { ic: "74165", desc: "8-Bit Parallel-In/Serial-Out Shift Register" },
                    { ic: "CD4094", desc: "8-Bit Shift Register (CMOS)" },
                    { ic: "74LS95", desc: "4-Bit Parallel-In/Parallel-Out Shift Register" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Decoders/Demultiplexers",
        subs: [
            {
                title: "Decoders/Demultiplexers",
                List: [
                    { ic: "7447", desc: "BCD to 7-Segment Decoder" },
                    { ic: "CD4028", desc: "BCD to Decimal Decoder" },
                    { ic: "74138", desc: "3-to-8 Line Decoder" },
                    { ic: "74154", desc: "4-to-16 Line Decoder" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Multiplexers",
        subs: [
            {
                title: "Multiplexers",
                List: [
                    { ic: "74151", desc: "8-to-1 Multiplexer" },
                    { ic: "CD4051", desc: "8-Channel Analog Multiplexer" },
                    { ic: "74153", desc: "Dual 4-to-1 Multiplexer" },
                    { ic: "CD4052", desc: "Dual 4-Channel Analog Multiplexer" }
                ]
            }
        ]
    }, {
        categoryTitle: "Display Drivers",
        subs: [
            {
                title: "7-Segment Drivers",
                List: [
                    { ic: "74147", desc: "BCD to 7-Segment Decoder/Driver" },
                    { ic: "7447", desc: "BCD to 7-Segment Decoder" },
                    { ic: "74LS48", desc: "BCD to 7-Segment Decoder" }
                ]
            },
            {
                title: "LED Drivers",
                List: [
                    { ic: "ULN2003", desc: "7-Channel Darlington Driver" },
                    { ic: "TLC5958", desc: "48-Channel LED Driver" }
                ]
            }
        ]
    }, {
        categoryTitle: "Voltage Regulators",
        subs: [
            {
                title: "Linear Regulators",
                List: [
                    { ic: "7805", desc: "5V Linear Regulator" },
                    { ic: "7812", desc: "12V Linear Regulator" },
                    { ic: "LM317", desc: "Adjustable Linear Voltage Regulator" }
                ]
            },
            {
                title: "Switching Regulators",
                List: [
                    { ic: "LM2596", desc: "DC-DC Buck Converter" },
                    { ic: "LM2575", desc: "DC-DC Step-Down Regulator" }
                ]
            }
        ]
    }, {
        categoryTitle: "Audio Amplifiers",
        subs: [
            {
                title: "Low-Power Amplifiers",
                List: [
                    { ic: "LM386", desc: "Low Power Audio Amplifier" },
                    { ic: "TDA2822", desc: "Dual Audio Power Amplifier" }
                ]
            },
            {
                title: "High-Power Amplifiers",
                List: [
                    { ic: "TDA2030", desc: "Audio Power Amplifier" },
                    { ic: "TDA2035", desc: "Audio Power Amplifier" }
                ]
            }
        ]
    }, {
        categoryTitle: "Operational Amplifiers",
        subs: [
            {
                title: "Standard Op-Amps",
                List: [
                    { ic: "LM741", desc: "General-Purpose Operational Amplifier" },
                    { ic: "TL081", desc: "Low-Noise Operational Amplifier" }
                ]
            },
            {
                title: "Precision Op-Amps",
                List: [
                    { ic: "OP07", desc: "Low-Noise Precision Op-Amp" },
                    { ic: "OPA2134", desc: "Precision Low-Noise Operational Amplifier" }
                ]
            }
        ]
    }
];


const categoryList = document.querySelector(".categories")
chips.forEach(category => {
    const categoryDiv = document.createElement("div")
    categoryDiv.classList.add("categoryDiv")
    categoryDiv.textContent = `${category.categoryTitle}`

    console.log(category.subs.length);

    if (category.subs.length > 1) {
        category.subs.forEach(sub => {
            const subList = document.createElement("span")
            subList.classList.add("subList")
            subList.textContent = `${sub.title}`
            categoryDiv.appendChild(subList)
        })
    }
    categoryDiv.addEventListener("click", () => {
        const subLists = categoryDiv.querySelectorAll(".subList")
        subLists.forEach(sub => {
            if (sub.style.display === "none") {
                sub.style.display = "block"
            } else {
                sub.style.display = "none"
            }
        })
    })

    categoryList.appendChild(categoryDiv)
})

