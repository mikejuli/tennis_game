
var levelsTable = {

  1: '111111111111120000000000023000044400003200004440000210000000000011122220222221',
  2: '12121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212',
  3: '1111111111111100000000000110111111111011015000000101101111111010110000000001011111111111101',
  4: '000000000000000000000000000000000000000000000000000013131313131311313131313131131313131313113131313131311313131313131',

  5	:'00000000000000111111111110000000000000000000000000000222222222220000000000000000055555550000000000000000022222222222000000000000000nnnnnnnnnnn001111111111100000000000000',

6	:'000000000000000000000000000000000000000000000000000000000050000000000054500000000000500000000000000000000000n000n0000000000000000000n0000000n00000000000000000000000000000',
7	:'20000n1n0000200000010000000000001000000000000100000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000n1n0000000000010000000000001000000000000100000000000010000002000001000002',
8	:'0000000000000000100100100100100100100100100100100100000100100100100100100100100100100100100000100100100100100100100100100100100100000100100100100100100100100100100100100000100100100100100100100100100100100100000000000000004444444444400000000000000',
9	:'0000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000005555555555555512121212121552121212121255555555555555',
10	:'0000000000000000000000000000000000000000000000000000000000000000000000000000000nnnn000nnnn00n000000000n00n000000000n00n010000010n00n000000000n00nnnnnnnnnnn00000000000000',
11	:'000000100000000000101000000000100010000000100000100011100050001110001000001000000010001000000000101000000000001000000000000100000000000101000000000100010000000100000100011100050001110001000001000000010001000000000101000000000001000000',
12	:'0000000003330000000003424300000000321230000333300230000300000030000030003330000030003000000030003000000003000333000000030000030000003333000300000000030003000000000300030000000003003000000000300300000000000000',
13	:'0000002000000000002320000000n0002000n00000n00000n0000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n000n00000000n050n00000000000000000',
14	:'0000000000000000000000000000000000000000000000000000000022222000000020000020000020005000200000200000200000002020200000000202020000000020202000000002020200000000202020000000020202000003332020233300000000000000',
15	:'00000000000000000000000000000000000000010001110011111001000001000100100000100010010000011111001000010000100100000100001001110011110000000000000000000000000000000000000000n0000n0000n010101010101015555555555555',
16	:'0000000000000000000000000000000000000000201020102010001020102010000010202010000000102010000000001010000000000020000000000002000000000001010000000001020100000001020102000001020102010001020102010200000000000000',
17	:'00000000000000n0210n0210n00n0120n0120n00n0210n0210n00n0120n0120n00n0210n0210n00n0120n0120n00n000434000n00n000343000n00n0210n0210n00n0120n0120n00n0210n0210n00n0120n0120n00n0210n0210n00n0120n0120n00000000000000',
18	:'00000000000000000000000000000000000000000000535000000000031300000000005350000000000000000000000000000000000000000000011111111111110004400044400004004040004000400004000400040040400040000444004440000000400000001111111111111',
19	:'0000002000000000002520000000000020000000033300033300030003030003003010303010300300030300030030203030203003000303000300301030301030030003030003003020303020300300030300030030103030103003000303000300000000000000',
20	:'1nnnnnnnnnnn11n000313000n11n000000000n11n00nnnnn00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11n00n000n00n11111111111111',
21	:'00022222220000020000000200002002220020000200202002000020020200200020020002002002002050200200200200020020200200000200202002000200200200200020020020020002002000200202002000020020200200002002020020000200002002000002222200000',
22	:'00033333330000030000000300003003330030000300303003000030030300300030030003003003003050300300300300030030300300000300303003000300300300300030030030030003003000300303003000030030300300003003030030000300003003000003333300000',
23	:'00044444440000040000000400004004440040000400404004000040040400400040040004004004004050400400400400040040400400000400404004000400400400400040040040040004004000400404004000040040400400004004040040000400004004000004444400000',
24	:'00000000000000000000000000020000200002000220022002000002202022000222222522222200022022200000022022022000002022300200000002030000000000003000000001000300010000000030000000010003000100000000300000000100030001000000003000000',
25	:'00000000011100000000011110000111000000000111110000110001110000110000000000000000110001111001110000000110000000500000000005555500000005500005000000500000000000055000050000000555550000110000500001101100000000000000000000000',
26	:'0000000000000111n00500n111000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000000n00500n000000n10001n000',
27	:'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111100011442224411044442252244440114422244110001111111110000000000000000000000000000',
28	:'0000000000000000100000100000121000121000123210123210001210001210000010000010000000000000000000100000100000121000121000123210123210001210001210000010000010000000000000000',
29	:'000000000000000000000000000nnnnnnnnnnn01n000000000n11n003444300n11n003454300n11n003454300n11n003454300n11n003454300n11n003454300n11n003454300n11n003454300n11n003454300n11n003444300n11n000000000n10nnnn000nnnn00000000000000',
30	:'11111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000044444000000044444440000044444444400044444444444005555555555500555555555550055555555555005555555555500555555555550',
31	:'11111111111111000001000001100300100300110000010000011002001002001100000100000110030010030011000001000001100200100200110000010000011003001003001100000100000110020010020011000001000001100300100300110000010000011550551550551',
32	:'20202020202020202020202020202020202020202020202020202020202020201020202020201020202020201010202020201010202020201010102020201010102020201010101020201010101020201010101010201010101010201010101010101010101010101010101010101',
33	:'0000000000000nnnnnnnnnnnnnn00000100000n000001010000000001050100000000010100000n00000100000nnnnnnnnnnnnnnnnnnnnnnnnnnnn00000100000n00000101000000000105010000000001010000000000010000000000000000000nnnnnnnnnnnnn0000000000000',
34	:'00000000000000000000000000000000500000000000000000000000000000000nnnnnnnnnnnnn00000000000000000000000000000000000000000000000000002222222222222211111111111221333333333122134445444312213333333331221111111111122222222222222',
35	:'000000000000000000000000000012004002100001200n002100001200n002100001200n002100000000n000000000000n0000004nnnnnnnnnnn4000000n000000000000n000000000300n000300000300n000300000300n000300000300400030000000000000000000000000000',
36	:'0000000000000000343034300000200000002000100000000010000000100000000000121000000000120210000000120002100000120030021000120034300210120035553002101200343002100012003002100000120002100000001202100000000012100000nnn0001000nnn',
37	:'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000555555555555555555555555555555555555555',
38	:'30010020010033001002001003300100200100330010020010033001002001003300100200100330010020010033001002001003300100200100330010020010033001002001003300100200100330010020010033001002001003300100200100330010020010033001002001003',
39	:'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000403020102030403020101020304030201020304403020102030403020101020304030201020304',
40	:'10000010000010100111111010001100100010001010010011000100111110010111111511111101000111001010010101101001000100101000100101010010100100011110100100000100001000nnn010nnn00',
41	:'nnnnnnnnnnnnnn00000000000n0000000000000000111111100000000000000000000000000000000222222200000025555520000033333333300000255555200000022222220000000000000000000000000000000011111110000000000000000n00000000000nnnnnnnnnnnnnn',
42	:'11111111111111222222222221120000000002112040404040211200404040021120404040402112000000000211205005005021120000000002112050050050211200000000021120500500502112000000000211200333330021120000000002112000000000211200000000021',
43	:'0000000000000000000000000000000000000000003000003000000000500000000000555000000000005000000000300000300000000000000000000001000000000001110000000011nnn11000001nnnnnnn100001nnnnnnn10001nnnnnnnnn1001nnnnnnnnn101222222222221',
44	:'0000000000000000000200000000000000000000000004000000000000000000000000020000000000000000000000000400000000000000000000000002000000000000000000004444444444400313131313130022222222222001nn11n11nn1002222222222200444444444440',
45	:'0nnnnnnnnnnn0000000n000000003300n003300000000n000000003300n003300000000n000000003300n003300000000n000000003300n003300000000n000000003300n003300000000n000000003300n003300000000n000000101010501010144444444444440202020202020',
46	:'00000000000000000005000000000000500000000000050000000010105010100000222522200000123353321000002345432000555555555555500023454320000012335332100000222522200000101050101000000005000000000000500000000000050000000000000000000',
47	:'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055555000000044444440000033333333300022222222222011111111111110222222222220003333333330000044444440000000555550000',
48	:'1000000000001200000000000210003333300012003300033002103300000330123300000003321000000000001200000000000210000nnn0000120003333300021003300033001203300000330213300000003312000000000002100000000000120000000000021414141414141',
49	:'0404040404040004040404040000040404040000n055555550n000052222250000n052222250n000052222250000n002222200n0000022222000000002222200000n002222200n000002nnn2000000002nnn200000n002nnn200n000002nnn2000000002nnn200000n002nnn200n0',
50	:'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn11111111111111004004004001100200200200110020020020011002nn2nn2001n00200200200n1002nn2nn20011002002002001100200200200110020020020011442222222441nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn'


}



module.exports.levelsTable = levelsTable;