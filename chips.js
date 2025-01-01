let chips = [
    {
        categoryTitle: "Logic Gates",
        subs: [
            {
                title: "AND Gates",
                List: [
                    { ic: "7408", desc: "Quad 2-Input AND Gate" },
                    { ic: "CD4081", desc: "Quad 2-Input AND Gate (CMOS)" },
                    { ic: "CD4082", desc: "Dual 4-Input AND Gate" },
                    { ic: "74LS11", desc: "Triple 3-Input AND Gate" }
                ]
            },
            {
                title: "OR Gates",
                List: [
                    { ic: "7432", desc: "Quad 2-Input OR Gate" },
                    { ic: "CD4071", desc: "Quad 2-Input OR Gate (CMOS)" },
                    { ic: "CD4075", desc: "Triple 3-Input OR Gate" },
                    { ic: "74LS32", desc: "Quad 2-Input OR Gate" }
                ]
            },
            {
                title: "NOT Gates",
                List: [
                    { ic: "7404", desc: "Hex Inverter" },
                    { ic: "CD4069", desc: "Hex Inverter (CMOS)" },
                    { ic: "74LS04", desc: "Hex Inverter" },
                    { ic: "CD4049", desc: "Hex Buffer/Inverter" }
                ]
            },
            {
                title: "NAND Gates",
                List: [
                    { ic: "7400", desc: "Quad 2-Input NAND Gate" },
                    { ic: "CD4011", desc: "Quad 2-Input NAND Gate (CMOS)" },
                    { ic: "CD4023", desc: "Triple 3-Input NAND Gate" },
                    { ic: "74LS20", desc: "Dual 4-Input NAND Gate" }
                ]
            },
            {
                title: "NOR Gates",
                List: [
                    { ic: "7402", desc: "Quad 2-Input NOR Gate" },
                    { ic: "CD4001", desc: "Quad 2-Input NOR Gate (CMOS)" },
                    { ic: "CD4025", desc: "Triple 3-Input NOR Gate" },
                    { ic: "74LS27", desc: "Triple 3-Input NOR Gate" }
                ]
            },
            {
                title: "XOR Gates",
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
                title: "Binary Counters",
                List: [
                    { ic: "7493", desc: "4-Bit Binary Counter" },
                    { ic: "CD4040", desc: "12-Stage Binary Ripple Counter" },
                    { ic: "CD4060", desc: "14-Stage Binary Counter/Divider" }
                ]
            },
            {
                title: "Decade Counters",
                List: [
                    { ic: "7490", desc: "Decade Counter" },
                    { ic: "CD4017", desc: "Decade Counter/Divider" },
                    { ic: "CD4026", desc: "Decade Counter with 7-Segment Display Decoder" }
                ]
            },
            {
                title: "Up/Down Counters",
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
                title: "SR Flip-Flops",
                List: [
                    { ic: "CD4011", desc: "Configurable as SR Flip-Flop" },
                    { ic: "7400", desc: "Configurable as SR Flip-Flop" }
                ]
            },
            {
                title: "JK Flip-Flops",
                List: [
                    { ic: "7473", desc: "Dual JK Flip-Flop with Clear" },
                    { ic: "74LS76", desc: "Dual JK Flip-Flop" }
                ]
            },
            {
                title: "D Flip-Flops",
                List: [
                    { ic: "7474", desc: "Dual D Flip-Flop with Preset and Clear" },
                    { ic: "CD4013", desc: "Dual D Flip-Flop (CMOS)" }
                ]
            },
            {
                title: "T Flip-Flops",
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
    }
];
console.log(chips);


