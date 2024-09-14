// source: https://automobilista-2.fandom.com/wiki/AMS2_Tracks_and_layouts

const RAW_DATA = `
Australia 	Adelaide 	Adelaide Historic 1988 	1988 	Historic 	3780 	52 	16 		1988-11-13
Australia 	Adelaide 	Adelaide 	2020 	Grade 3 	3219 	52 	14 		2020-03-05
Brazil 	Ascurra 	Ascurra Dirt 	2022 	Off-road 	910 	88 	8 	Adrenaline pt1 pack 	2022-09-28
Brazil 	Ascurra 	Ascurra RX 	2023 	Off-road 	910 	88 	8 	Adrenaline pt1 pack 	2023-09-28
Monaco 	Azure Circuit (Monaco) 	Azure Circuit 	2021 	Grade 1 	3337 	1.57 	19 		2021-05-23
Spain 	Barcelona 	Barcelona 1991 	1991 	Historic 	4747 	115 	14 	Historicaltrack pt2 pack 	1991-09-29
Spain 	Barcelona 	Circuit de Barcelona-Catalunya GP 	2022 	Grade 1 	4675 	115 	16 	Barcelona pack 	2022-05-22
Spain 	Barcelona 	Circuit de Barcelona-Catalunya GP (No Chicane) 	2022 	Grade 1 	4657 	115 	14 	Barcelona pack 	2022-05-22
Spain 	Barcelona 	Circuit de Barcelona-Catalunya National 	2022 	Grade 1 	2997 	115 	9 	Barcelona pack 	2022-05-22
Spain 	Barcelona 	Circuit de Barcelona-Catalunya RX 	2022 	Off-road 	1125 	115 	9 	Adrenaline pt1 pack 	2022-10-30
Australia 	Bathurst 	Bathurst 1983 	1983 	Historic 	6171 	780 	20 	Historicaltrack pt1 pack 	1983-02-01
Australia 	Bathurst 	Bathurst 2020 	2020 	Grade 3 	6213 	780 	23 		2020-02-01
England 	Brands Hatch 	Brands Hatch GP 	2020 	Grade 2 	3916 	177.57 	10 		2020-06-11
England 	Brands Hatch 	Brands Hatch Indy 	2020 	Ungraded/Alternate 	1944 	177.57 	5 		2020-06-11
Brazil 	Brasilia 	Brasilia Full 	2014 	Ungraded/Alternate 	5476 	1172 	12 		2014-06-02
Brazil 	Brasilia 	Brasilia Outer 	2014 	Ungraded/Alternate 	2913 	1172 	5 		2014-06-02
Argentina 	Buenos Aires 	Buenos Aires Circuito No.12 	2020 	Grade 1 	5651 	10 	8 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.15 	2020 	Grade 1 	5948 	10 	15 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.6 	2020 	Grade 1 	4312 	10 	17 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.6S 	2020 	Grade 1 	4259 	10 	17 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.7 	2020 	Grade 1 	2607 	10 	4 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.8 	2020 	Grade 1 	3327 	10 	9 		2020-02-20
Argentina 	Buenos Aires 	Buenos Aires Circuito No.9 	2020 	Grade 1 	3335 	10 	11 		2020-02-20
Norway 	Buskerud 	Buskerud Kart Long 	2020 	Kart 	1531 	35.188 	22 		2020-07-30
Norway 	Buskerud 	Buskerud Kart 	2020 	Kart 	958 	35.188 	15 		2020-07-30
England 	Cadwell Park 	Cadwell Park 	2020 	Ungraded/Alternate 	3502 	122 	16 		2020-06-05
Brazil 	Campo Grande 	Campo Grande 	2020 	Grade 3 	3433 	592 	12 		2020-06-07
Brazil 	Cascavel 	Cascavel 	2020 	Grade 3 	3302 	750 	7 		2020-10-18
USA 	Cleveland 	Cleveland GP 	2003 	Ungraded/Alternate 	3389 	199 	10 	Racin´ USA pt2 pack 	2020-6-5
Argentina 	Córdoba 	Córdoba TC 	2020 	Ungraded/Alternate 	3653 	586 	7 		2020-6-3
Argentina 	Córdoba 	Córdoba No.4 	2020 	Ungraded/Alternate 	4060 	586 	13 		2020-2-18
Argentina 	Córdoba 	Córdoba No.2 	2020 	Ungraded/Alternate 	2060 	586 	11 		2022-10-9
Brazil 	Curitiba 	Curitiba 	2020 	Grade 3 	3695 	881 	10 		2020-3-17
Brazil 	Curitiba 	Curitiba Outer 	2020 	Ungraded/Alternate 	2600 	881 	6 		2020-3-17
Brazil 	Curvelo 	Curvelo Long 	2020 	Grade 2 	4420 	672 	18 		2020-4-1
Brazil 	Curvelo 	Curvelo Short 	2020 	Ungraded/Alternate 	3330 	672 	18 		2020-4-1
USA 	Daytona 	Daytona Nascar Tri-Oval 	2021 	Grade 3 	4023 	9.039 	3 	Racin´ USA pt1 pack 	2021-2-14
USA 	Daytona 	Daytona Sports Car Course 	2021 	Grade 3 	5729 	9.039 	12 	Racin´ USA pt1 pack 	2021-2-4
USA 	Daytona 	Daytona Nascar Road Course 	2021 	Grade 3 	5729 	9.039 	15 	Racin´ USA pt1 pack 	2021-2-14
England 	Donington Park 	Donington GP 	2020 	Grade 2 	4023 	96 	11 		2020-8-11
England 	Donington Park 	Donington National 	2020 	Ungraded/Alternate 	3185 	96 	9 		2020-8-11
Portugal 	Cascais (Estoril) 	Cascais Historic 1988 	1988 	Historic 	4350 	130 	11 	Historicaltrack pt1 pack 	1988-9-25
Portugal 	Cascais (Estoril) 	Cascais 	2020 	Grade 1 	4182 	130 	13 		2020-3-26
Portugal 	Cascais (Estoril) 	Cascais Alternate 	2020 	Grade 3 	4157 	130 	11 		2020-3-26
USA 	Fontana 	Auto Club Speedway Oval 	2020 	Grade 2 	3219 	377 	4 	Racin´ USA pt3 pack 	2022-5-30
USA 	Fontana 	Auto Club Speedway Sports Car Course 	2020 	Grade 2 	4509 	377 	17 	Racin´ USA pt3 pack 	2022-5-30
Brazil 	Foz 	Foz 	2023 	Off-road 	910 	164 	8 	Adrenaline pt1 pack 	2023-4-23
Brazil 	Galeao Airport 	Galeao Airport 	2022 	Ungraded/Alternate 	3200 	10 	5 		2022-4-10
USA 	Gateway 	WWT Raceway Oval 	2022 	Grade 2 	2012 	120 	4 	Racin´ USA pt3 pack 	2022-8-20
USA 	Gateway 	WWT Raceway Road Course (Short) 	2022 	Grade 2 	2575 	120 	10 	Racin´ USA pt3 pack 	2022-8-20
USA 	Gateway 	WWT Raceway Road Course (Long) 	2022 	Grade 2 	3219 	120 	14 	Racin´ USA pt3 pack 	2022-8-20
Brazil 	Goiânia 	Goiânia 	2020 	Grade 4 	3820 	757 	13 		2020-3-29
Brazil 	Goiânia 	Goiânia External 	2020 	Ungraded/Alternate 	2590 	757 	5 		2020-3-29
Brazil 	Goiânia 	Goiânia Short 	2020 	Ungraded/Alternate 	1910 	757 	7 		2020-3-29
Brazil 	Granja Viana 	Copa São Paulo Stage 1 	2020 	Kart 	1000 	797 	12 		2020-5-3
Brazil 	Granja Viana 	Copa São Paulo Kart Stage 2 	2020 	Kart 	980 	797 	9 		2020-5-3
Brazil 	Granja Viana 	Granja Viana Kart 101 	2020 	Kart 	1015 	797 	14 		2020-5-3
Brazil 	Granja Viana 	Granja Viana Kart 102 	2020 	Kart 	990 	797 	13 		2020-5-3
Brazil 	Granja Viana 	Granja Viana Kart 121 	2020 	Kart 	800 	797 	11 		2020-5-3
Brazil 	Guaporé 	Guaporé 	2020 	Ungraded/Alternate 	3080 	474 	7 		2020-5-9
Germany 	Hockenheimring 	Hockenheim Historic 1977 	1977 	Historic 	6789 	102 	13 	Hockenheim pack 	1977-8-31
Germany 	Hockenheimring 	Hockenheim Historic 1988 	1988 	Historic 	6797 	102 	15 	Hockenheim pack 	1988-8-31
Germany 	Hockenheimring 	Hockenheim Historic 1988 Short 	1988 	Historic Alternate 	2636 	102 	13 	Hockenheim pack 	1988-7-30
Germany 	Hockenheimring 	Hockenheim Historic 2001 	2001 	Historic 	6823 	102 	16 	Hockenheim pack 	2001-8-31
Germany 	Hockenheimring 	Hockenheim 	2020 	Grade 1 	4574 	102 	17 	Hockenheim pack 	2020-8-27
Germany 	Hockenheimring 	Hockenheim National 	2020 	Ungraded/Alternate 	3692 	102 	16 	Hockenheim pack 	2020-8-31
Germany 	Hockenheimring 	Hockenheim RX 	2020 	Off-road 	1122 	102 	17 	Adrenaline pt1 pack 	2023-8-27
Germany 	Hockenheimring 	Hockenheim Short A 	2020 	Ungraded/Alternate 	2638 	102 	11 	Hockenheim pack 	2020-8-31
Germany 	Hockenheimring 	Hockenheim Short B 	2020 	Ungraded/Alternate 	2604 	102 	13 	Hockenheim pack 	2020-8-31
Ecuador 	Ibarra 	Autódromo Yahuarcocha 	2020 	Grade 4 	4307 	2190 	18 		2020-3-17
Ecuador 	Ibarra 	Autódromo Yahuarcocha Reverse 	2020 	Grade 4 	4307 	2190 	18 		2020-3-17
Italy 	Imola 	Imola 	2020 	Grade 1 	4909 	47.188 	19 		2020-5-3
Italy 	Imola 	Imola Historic 2001 	2001 	Historic 	4933 	47.188 	21 		2001-4-15
Italy 	Imola 	Imola Historic 1972 	1972 	Historic 	5018 	47.188 	14 		1972-5-1
Italy 	Imola 	Imola Historic 1988 	1988 	Historic 	5040 	47.188 	21 		1988-5-1
USA 	Indianapolis 	Indianapolis Motor Speedway Oval 	2022 	Grade 1 	4023 	220 	4 	Racin´ USA pt3 pack 	2022-5-29
USA 	Indianapolis 	Indianapolis Motor Speedway Road Course 	2022 	Grade 1 	3925 	220 	14 	Racin´ USA pt3 pack 	2022-5-29
Brazil 	Interlagos 	Interlagos GP 	2020 	Grade 1 	4295 	750.188 	15 		2021-11-12
Brazil 	Interlagos 	Interlagos Kart One 	2020 	Kart 	1123 	750.188 	19 		2020-11-1
Brazil 	Interlagos 	Interlagos Kart Two 	2020 	Kart 	1120 	750.188 	15 		2020-7-1
Brazil 	Interlagos 	Interlagos Kart Three 	2020 	Kart 	699 	750.188 	9 		2020-11-1
Brazil 	Interlagos 	Interlagos 1991 	1991 	Historic 	4325 	750.188 	17 	Historicaltrack pt2 pack 	1991-3-24
Brazil 	Interlagos 	Interlagos 1993 	1993 	Historic 	4325 	750.188 	17 	Historicaltrack pt2 pack 	1993-2-26
Brazil 	Interlagos 	Interlagos Historic 1976 	1976 	Historic 	7927 	750.188 	17 		1976-2-26
Brazil 	Interlagos 	Interlagos Historic 1978 Outer 	1976 	Historic Alternate 	3236 	750.188 	6 		1976-2-26
Brazil 	Interlagos 	Interlagos Stock Car Brasil 	2020 	Grade 1 	4295 	750.188 	15 		2020-8-23
Brazil 	Jacarepaguá 	Jacarepaguá Historic 2005 	2005 	Historic 	4905 	30 	13 		2005-4-9
Brazil 	Jacarepaguá 	Jacarepaguá Historic 2005 Oval 	2005 	Historic 	3000 	30 	4 		2005-4-9
Brazil 	Jacarepaguá 	Jacarepaguá Historic 2012 SCB 	2012 	Historic 	3307 	30 	8 		2012-4-9
Brazil 	Jacarepaguá 	Jacarepaguá Historic 2012 Short 	2012 	Historic 	3047 	30 	7 		2012-4-9
Brazil 	Jacarepaguá 	Jacarepaguá Historic 1988 	1988 	Historic 	5003 	30 	11 		1988-4-3
Spain 	Jerez 	Jerez Historic 1988 	1988 	Grade 1 	4218 	38 	16 	Historicaltrack pt1 pack 	1988-10-2
Spain 	Jerez 	Jerez Moto 	2020 	Grade 1 	4427 	38 	15 		2020-4-26
Spain 	Jerez 	Jerez Chicane 	2020 	Ungraded/Alternate 	4423 	38 	13 		2020-4-26
Japan 	Kansai (Suzuka) 	Kansai Classic 	2020 	Historic 	5821 	47.188 	19 		2020-10-5
Japan 	Kansai (Suzuka) 	Kansai East 	2020 	Ungraded/Alternate 	2243 	47.188 	10 		2020-10-5
Japan 	Kansai (Suzuka) 	Kansai GP 	2020 	Grade 1 	5810 	47.188 	19 		2020-10-5
Japan 	Kansai (Suzuka) 	Kansai West 	2020 	Ungraded/Alternate 	3466 	47.188 	11 		2020-10-5
South Africa 	Kyalami 	Kyalami 	2020 	Grade 2 	4529 	1532 	15 		2020-4-15
South Africa 	Kyalami 	Kyalami Historic 1976 	1976 	Historic 	4048 	1532 	9 		1976-3-5
USA 	Laguna Seca 	Laguna Seca 2020 	2020 	Grade 2 	3602 	220 	11 	Racin´ USA pt1 pack 	2020-8-30
France 	La Sarthe 	Le Mans 24h 	2023 	Grade 2 	13629 	52 	38 		2023-6-10
France 	La Sarthe 	Le Mans Circuit Bugatti 	2022 	Grade 2 	4185 	52 	14 		2022-6-11
Brazil 	Londrina 	Londrina Short 	2020 	Grade 3 	3020 	566 	10 		2020-5-17
Brazil 	Londrina 	Londrina Kart One 	2020 	Kart 	1002 	566 	10 		2020-4-7
Brazil 	Londrina 	Londrina Kart Two 	2020 	Kart 	864 	566 	11 		2020-4-7
Brazil 	Londrina 	LondrinaKart3 	2020 	Kart 	644 	566 	6 		2020-4-7
Brazil 	Londrina 	Londrina Long 	2020 	Ungraded/Alternate 	3140 	566 	10 		2020-5-17
USA 	Long Beach 	Long Beach 	2020 	Grade 3 	3167 	2 	11 	Racin´ USA pt1 pack 	2020-9-15
Canada 	Montreal 	Montréal Historic 1988 	1988 	Historic 	4430 	13 	16 		1988-6-12
Canada 	Montreal 	Montreal Historic 1991 	1991 	Historic 	4430 	13 	16 	Historicaltrack pt2 pack 	1991-6-12
Canada 	Montreal 	Montréal 	2020 	Grade 1 	4361 	13 	14 		2020-6-9
Italy 	Monza 	Monza Historic 1971 	1971 	Historic 	5750 	180 	7 	Monza pack 	1971-9-5
Italy 	Monza 	Monza Historic 1971 10k 	1971 	Historic Alternate 	10100 	180 	16 	Monza pack 	1971-4-25
Italy 	Monza 	Monza Historic 1971 10k (no chicane) 	1971 	Historic Alternate 	10000 	180 	9 	Monza pack 	1971-4-25
Italy 	Monza 	Monza Historic 1971 Junior 	1971 	Historic Alternate 	2405 	180 	4 	Monza pack 	1971-9-5
Italy 	Monza 	Monza Historic 1991 	1991 	Historic 	5800 	180 	14 	Monza pack 	1991-9-8
Italy 	Monza 	Monza 	2020 	Grade 1 	5793 	180 	11 	Monza pack 	2020-9-6
Italy 	Monza 	Monza Junior 	2020 	Ungraded/Alternate 	2405 	180 	4 	Monza pack 	2020-4-16
Germany 	Nürburgring 	Nordschleife 2020 	2020 	Grade 3 	20832 	397 	73 	Nurburgring pack 	2020-8-1
Germany 	Nürburgring 	Nordschleife 24 Hour 2020 	2020 	Grade 3 	25378 	397 	88 	Nurburgring pack 	2020-8-1
Germany 	Nürburgring 	Gesamtstrecke Historic 1971 	1971 	Historic 	28265 	397 	187 	Nurburgring pack 	1971-7-5
Germany 	Nürburgring 	Nordschleife Historic 1971 	1971 	Historic 	22835 	397 	160 	Nurburgring pack 	1971-7-5
Germany 	Nürburgring 	Südscheleife Historic 1971 	1971 	Historic 	7747 	397 	27 	Nurburgring pack 	1971-7-5
Germany 	Nürburgring 	Betonschleife Historic 1971 	1971 	Historic 	2391 	397 	7 	Nurburgring pack 	1971-7-5
Germany 	Nürburgring 	Nürburgring RX 	2020 	Off-road 	1028 	397 	6 	Adrenaline pt1 pack 	2022-11-13
Germany 	Nürburgring 	Nürburgring GP 2020 	2020 	Grade 1 	5148 	397 	15 	Nurburgring pack 	2020-9-1
Germany 	Nürburgring 	Nürburgring Sprint 2020 	2020 	Ungraded/Alternate 	3629 	397 	11 	Nurburgring pack 	2020-9-1
Germany 	Nürburgring 	Nürburgring Sprint S 2020 	2020 	Ungraded/Alternate 	3059 	397 	11 	Nurburgring pack 	2020-9-1
Germany 	Nürburgring 	Nürburgring Veedol 2020 	2020 	Ungraded/Alternate 	5137 	397 	15 	Nurburgring pack 	2020-9-1
Italy 	Ortona 	Ortona Kart One 	2020 	Kart 	1508 	137 	16 		2020-9-22
Italy 	Ortona 	Ortona Kart Two 	2020 	Kart 	1552 	137 	20 		2020-9-22
Italy 	Ortona 	Ortona Kart Three 	2020 	Kart 	1335 	137 	17 		2020-9-22
Italy 	Ortona 	Ortona Kart Four 	2020 	Kart 	963 	137 	13 		2020-9-22
England 	Oulton Park 	Oulton Park International 	2020 	Grade 3 	4330 	65 	17 		2020-7-11
England 	Oulton Park 	Oulton Park Classic 	2020 	Historic 	4297 	65 	12 		2020-7-11
England 	Oulton Park 	Oulton Park Fosters 	2020 	Ungraded/Alternate 	2662 	65 	9 		2020-7-11
England 	Oulton Park 	Oulton Park Island 	2020 	Ungraded/Alternate 	3637 	65 	12 		2020-7-11
USA 	Road America 	Road America 	2021 	Grade 2 	6515 	300 	14 	Racin´ USA pt2 pack 	2021-10-1
USA 	Road America 	Road America(Bend) 	2021 	Grade 2 	6515 	300 	14 	Racin´ USA pt2 pack 	2021-10-1
Brazil 	Salvador 	Salvador Street Circuit 	2020 	Grade 3 	2720 	68 	10 		2020-5-19
Brazil 	Santa Cruz do Sul 	Santa Cruz do Sul 	2020 	Grade 4 	3325 	120 	14 		2020-7-19
England 	Silverstone 	Silverstone Historic 1975 	1975 	Historic 	4718 	154 	10 	Silverstone pack 	1975-7-19
England 	Silverstone 	Silverstone Historic 1975 (no chicane) 	1975 	Historic Alternate 	4710 	154 	8 	Silverstone pack 	1975-7-19
England 	Silverstone 	Silverstone Historic 1991 	1991 	Historic 	5226 	154 	17 	Silverstone pack 	1991-7-14
England 	Silverstone 	Silverstone Historic 2001 	2001 	Historic 	5141 	154 	16 	Silverstone pack 	2001-7-15
England 	Silverstone 	Silverstone International Historic 2001 	2001 	Historic Alternate 	3619 	154 	10 	Silverstone pack 	2001-7-15
England 	Silverstone 	Silverstone National Historic 2001 	2001 	Historic Alternate 	2638 	154 	5 	Silverstone pack 	2001-7-15
England 	Silverstone 	Silverstone 	2020 	Grade 1 	5890 	154 	18 	Silverstone pack 	2020-7-14
England 	Silverstone 	Silverstone International 	2020 	Ungraded/Alternate 	2979 	154 	9 	Silverstone pack 	2020-7-14
England 	Silverstone 	Silverstone National 	2020 	Ungraded/Alternate 	2639 	154 	5 	Silverstone pack 	2020-7-14
England 	Snetterton 	Snetterton 300 	2020 	Grade 4 	1580 	43 	6 		2020-6-22
England 	Snetterton 	Snetterton 200 	2020 	Grade 2 	3220 	43 	8 		2020-6-22
England 	Snetterton 	Snetterton 100 	2020 	Grade 2 	4780 	43 	12 		2020-6-22
Belgium 	Spa-Francorchamps 	Spa-Francorchamps 1970 	1970 	Historic 	14120 	394 	21 	Spa pack 	1970-6-7
Belgium 	Spa-Francorchamps 	Spa-Francorchamps 1970 1000km 	1970 	Historic Alternate 	14120 	394 	21 	Spa pack 	1970-5-17
Belgium 	Spa-Francorchamps 	Spa-Francorchamps 1993 	1993 	Historic 	6940 	394 	23 	Spa pack 	1993-8-25
Belgium 	Spa-Francorchamps 	Spa-Francorchamps 2020 	2020 	Grade 1 	7004 	394 	20 	Spa pack 	2020-8-30
Belgium 	Spa-Francorchamps 	Spa-Francorchamps 2022 	2020 	Grade 1 	7004 	394 	20 	Spa pack 	2022-8-27
Belgium 	Spa-Francorchamps 	Spa-Francorchamps RX 	2022 	Off-road 	890 	394 	5 	Adrenaline pt1 pack 	2022-8-27
Brazil 	Speedland 	Speedland Kart 1 	2020 	Kart 	965 	700.188 	29 		2020-1-30
Brazil 	Speedland 	Speedland Kart 2 	2020 	Kart 	989 	700.188 	30 		2020-1-30
Brazil 	Speedland 	Speedland Kart 3 	2020 	Kart 	439 	700.188 	15 		2020-1-30
Brazil 	Speedland 	Speedland Kart 4 	2020 	Kart 	582 	700.188 	12 		2020-1-30
Austria 	Spielberg (Red Bull Ring) 	Spielberg 	2020 	Grade 1 	4318 	660 	10 		2020-7-5
Austria 	Spielberg (Red Bull Ring) 	Spielberg Historic 1977 	1977 	Historic 	5916 	660 	11 		1977-4-22
Austria 	Spielberg (Red Bull Ring) 	Spielberg Short 	2020 	Ungraded/Alternate 	2330 	660 	6 		2020-7-5
Austria 	Spielberg (Red Bull Ring) 	Spielberg Historic 1974 	1974 	Historic 	5896 	660 	9 		1974-4-22
Brazil 	Tarumã 	Tarumã International 	2020 	Grade 4 	3016 	71 	9 		2020-4-28
Brazil 	Tarumã 	Tarumã Chicane 	2020 	Ungraded/Alternate 	3074 	71 	11 		2020-4-28
Argentina 	Termas de Río Hondo 	Termas de Río Hondo 	2020 	Grade 2 	4806 	280.75 	14 		2022-5-29
Finland 	Tykki 	Tykki Dirt 1 	2022 	Off-road 	910 	81 	8 	Adrenaline pt1 pack 	2022-5-28
Finland 	Tykki 	Tykki Dirt 2 	2022 	Off-road 	1680 	81 	14 	Adrenaline pt1 pack 	2022-5-28
Finland 	Tykki 	Tykki RX 	2022 	Off-road 	1015 	81 	11 	Adrenaline pt1 pack 	2022-5-28
Finland 	Tykki 	Tykki Tarmac 	2022 	Off-road 	750 	81 	7 	Adrenaline pt1 pack 	2022-5-28
Brazil 	Velo Cittá 	Velo Cittá 	2020 	Grade 3 	3328 	750 	15 		2020-6-28
Brazil 	Velo Cittá 	Velo Cittá Club Day 	2020 	Ungraded/Alternate 	1721 	750 	7 		2020-6-28
Brazil 	Velo Cittá 	Velo Cittá Track Day 	2020 	Ungraded/Alternate 	3369 	750 	16 		2020-6-28
Brazil 	Velopark 	Velopark 2010 	2020 	Ungraded/Alternate 	2153 	15 	10 		2020-4-12
Brazil 	Velopark 	Velopark 2017 	2020 	Grade 3 	2278 	15 	13 		2020-4-12
USA 	Virginia 	Virginia International Raceway Full 	2020 	Grade 2 	5262 	65 	18 		2020-9-17
USA 	Virginia 	Virginia International Raceway Grand 	2020 	Ungraded/Alternate 	6759 	65 	24 		2020-9-17
USA 	Virginia 	Virginia International Raceway North 	2020 	Ungraded/Alternate 	3621 	65 	14 		2020-9-17
USA 	Virginia 	Virginia International Raceway Patriot 	2020 	Ungraded/Alternate 	1770 	65 	13 		2020-9-17
USA 	Virginia 	Virginia International Raceway South 	2020 	Ungraded/Alternate 	2655 	65 	9 		2020-9-17
USA 	Watkins Glen 	Watkins Glen GP 	2020 	Grade 2 	5430 	452 	11 	Racin´ USA pt2 pack 	2021-10-1
USA 	Watkins Glen 	Watkins Glen GP (Inner Loop) 	2020 	Grade 2 	5552 	452 	15 	Racin´ USA pt2 pack 	2021-10-1
USA 	Watkins Glen 	Watkins Glen Short 	2020 	Grade 2 	3907 	452 	7 	Racin´ USA pt2 pack 	2021-10-1
USA 	Watkins Glen 	Watkins Glen Short (Inner Loop) 	2020 	Grade 2 	3943 	452 	11 	Racin´ USA pt2 pack 	2021-10-1
`;

export const TRACKS = RAW_DATA.trim().split('\n')
    .map((line) => {
        const [location, track, layout, year, grade, length, altitude, turns, dlc, date] = line.split('\t').map(s => s.trim());
        return { location, track, layout, grade, dlc };
    })
    .filter(({ grade }) => ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Ungraded/Alternate"].includes(grade));
