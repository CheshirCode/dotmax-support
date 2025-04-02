// Шаг 1: Создаем массив объектов
const objects = [
  {
    name: "А 644 КС 198",
    fullname: "INTERNATIONAL PROSTAR FL 627 PREMIUM",
    date: new Date("2025-10-17"),
    comment: "",
  },
  {
    name: "К 613 КУ 147",
    fullname: "DAF XF 480 FT",
    date: new Date("2025-07-20"),
    comment: "",
  },
  {
    name: "К 984 ЕО 147",
    fullname: "DAF XF 530 FT",
    date: new Date("2025-11-08"),
    comment: "",
  },
  {
    name: "В 618 РВ 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-11-01"),
    comment: "",
  },
  {
    name: "В 648 СМ 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-05-31"),
    comment: "",
  },
  {
    name: "В 915 РН 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-10-16"),
    comment: "",
  },
  {
    name: "В 100 ТК 98",
    fullname: "VOLVO FH-Truck 6x2",
    date: new Date("2025-10-28"),
    comment: "Гулиев С.С.",
  },
  {
    name: "В 653 ХС 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2025-03-11"),
    comment: "",
  },
  {
    name: "В 851 СК 47",
    fullname: "Volvo FH-Truck 4x2",
    date: new Date("2026-03-25"),
    comment: "",
  },
  {
    name: "Е 427 НК 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2025-10-03"),
    comment: "",
  },
  {
    name: "Е 932 НК 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2026-03-10"),
    comment: "нет данных",
  },
  {
    name: "Е 465 МК 147",
    fullname: "SANY HQC240DE",
    date: new Date("2025-06-03"),
    comment: "",
  },
  {
    name: "К 586 СУ 147",
    fullname: "SANY HQC240DE",
    date: new Date("2025-06-24"),
    comment: "1 год со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "В 077 МК 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-10-02"),
    comment: "",
  },
  {
    name: "В 081 СО 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-04-18"),
    comment: "",
  },
  {
    name: "В 090 СО 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-05-17"),
    comment: "",
  },
  {
    name: "В 280 ОЕ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-10-19"),
    comment: "",
  },
  {
    name: "В 294 ВО 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-10-17"),
    comment: "",
  },
  {
    name: "В 294 ЕУ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-11-13"),
    comment: "Ремонт",
  },
  {
    name: "В 358 ОС 147",
    fullname: "SCANIA S500A 4X2 NA",
    date: new Date("2025-05-10"),
    comment: "",
  },
  {
    name: "В 401 ОА 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-10-17"),
    comment: "",
  },
  {
    name: "В 403 МС 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-06-14"),
    comment: "",
  },
  {
    name: "В 406 МУ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-05-29"),
    comment: "",
  },
  {
    name: "В 657 СС 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-05-21"),
    comment: "",
  },
  {
    name: "Р 773 КТ 98",
    fullname: "SCANIA R124 LA 4X2 NA420",
    date: new Date("2025-12-03"),
    comment: "Ремонт",
  },
  {
    name: "В 213 ТМ 47",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2025-04-04"),
    comment: "",
  },
  {
    name: "В 232 ЕУ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-09-26"),
    comment: "",
  },

  {
    name: "В 368 СУ 47",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2025-10-15"),
    comment: "",
  },
  {
    name: "В 395 ХТ 147",
    fullname: "MERCEDES-BENZ ACTROS 2545LS",
    date: new Date("2026-03-18"),
    comment: "",
  },
  {
    name: "В 496 ХХ 147",
    fullname: "MERCEDES-BENZ ACTROS 2544LS",
    date: new Date("2025-03-10"),
    comment: "",
  },
  {
    name: "В 668 НЕ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-05-27"),
    comment: "",
  },
  {
    name: "В 669 ХС 147",
    fullname: "MERCEDES-BENZ ACTROS 1845LS",
    date: new Date("2025-07-09"),
    comment: "",
  },
  {
    name: "В 986 ЕХ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-04-12"),
    comment: "",
  },
  {
    name: "В 998 ХР 147",
    fullname: "MERCEDES-BENZ ACTROS 1845LS",
    date: new Date("2026-02-19"),
    comment: "",
  },
  {
    name: "Е 135 КЕ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-17"),
    comment: "",
  },
  {
    name: "Е 391 МК 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2025-04-01"),
    comment: "дата не соответствует 170-ФЗ р.15",
  },

  {
    name: "К 113 ОХ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-10"),
    comment: "",
  },
  {
    name: "К 363 АО 147",
    fullname: "MERCEDES-BENZ ACTROS 2541LS",
    date: new Date("2025-10-22"),
    comment: "",
  },
  {
    name: "К 355 ОТ 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2025-04-23"),
    comment: "дата не соответствует 170-ФЗ р.15",
  },
  {
    name: "К 632 ОВ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-22"),
    comment: "",
  },
  {
    name: "К 638 ОУ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-17"),
    comment: "",
  },
  {
    name: "К 674 ОУ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-09"),
    comment: "",
  },
  {
    name: "К 785 ОС 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2025-04-23"),
    comment: "дата не соответствует 170-ФЗ р.15",
  },
  {
    name: "К 802 ТУ 147",
    fullname: "MERCEDES-BENZ ACTROS",
    date: new Date("2025-11-15"),
    comment: "дата не соответствует 170-ФЗ р.15",
  },
  {
    name: "К 818 ОХ 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2025-04-24"),
    comment: "дата не соответствует 170-ФЗ р.15",
  },
  {
    name: "К 837 ВК 147",
    fullname: "MERCEDES-BENZ ACTROS 2553 LS",
    date: new Date("2025-03-07"),
    comment: "",
  },
  {
    name: "К 840 ВК 147",
    fullname: "MERCEDES-BENZ ACTROS 2553 LS",
    date: new Date("2026-03-10"),
    comment: "",
  },
  {
    name: "О 735 РМ 47",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-05-03"),
    comment: "",
  },
  {
    name: "У 464 НА 178",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-11-05"),
    comment: "",
  },
  {
    name: "У 484 КС 178",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2025-10-19"),
    comment: "",
  },

  // ...
];

const objects1 = [
  {
    name: "ВК 2208 47",
    fullname: "CTTM Cargoline 972240-02",
    date: new Date("2028-01-10"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВК 2479 47",
    fullname: "CTTM Cargoline 972240-02",
    date: new Date("2028-01-10"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВК 3274 47",
    fullname: "CTTM Cargoline 972240-02",
    date: new Date("2028-01-10"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВК 3275 47",
    fullname: "CTTM Cargoline 972240-02",
    date: new Date("2028-01-10"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВК 2916 47",
    fullname: "CTTM Cargoline 972240-02",
    date: new Date("2028-01-10"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "АН 3553 47",
    fullname: "VANHOOL S 332",
    date: new Date("2025-05-21"),
    comment: "",
  },
  {
    name: "АН 8637 78",
    fullname: "SCHMITZ SCO24",
    date: new Date("2025-04-12"),
    comment: "",
  },
  {
    name: "АО 5519 47",
    fullname: "SCHMITZ SC024L",
    date: new Date("2025-04-03"),
    comment: "",
  },
  {
    name: "АР 7835 47",
    fullname: "KRONE SD C27",
    date: new Date("2026-03-03"),
    comment: "",
  },
  {
    name: "АР 7836 47",
    fullname: "KRONE SD",
    date: new Date("2025-07-23"),
    comment: "",
  },
  {
    name: "ВР 1656 78",
    fullname: "KOGEL SNC024",
    date: new Date("2025-03-07"),
  },
  {
    name: "АР 8835 47",
    fullname: "SCHMITZ SK024",
    date: new Date("2025-04-04"),
    comment: "",
  },
  {
    name: "АT 3008 47",
    fullname: "KRONE SDR27",
    date: new Date("2025-08-03"),
    comment: "",
  },
  {
    name: "АT 3123 47",
    fullname: "LAMBERET",
    date: new Date("2025-04-18"),
    comment: "",
  },
  {
    name: "АT 5500 78",
    fullname: "KRONE SDR27",
    date: new Date("2025-05-10"),
    comment: "",
  },
  {
    name: "АТ 9106 47",
    fullname: "SCHMITZ SK024/L",
    date: new Date("2025-10-06"),
    comment: "",
  },
  {
    name: "АУ 2424 47",
    fullname: "SCHMITZ SK024",
    date: new Date("2025-09-16"),
    comment: "",
  },
  {
    name: "АУ 2432 47",
    fullname: "KOGEL S24",
    date: new Date("2025-10-17"),
    comment: "",
  },
  {
    name: "АУ 7775 47",
    fullname: "SCHMITZ SK024/L-13.4FP60 COOL",
    date: new Date("2025-11-27"),
    comment: "",
  },
  {
    name: "АУ 8193 78",
    fullname: "SCHMITZ SK024",
    date: new Date("2025-11-05"),
    comment: "",
  },
  {
    name: "АУ 8577 78",
    fullname: "KORTEN COE33",
    date: new Date("2025-06-13"),
    comment: "",
  },
  {
    name: "АХ 6861 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL",
    date: new Date("2026-05-21"),
    comment: "",
  },
  {
    name: "АХ 7973 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2026-05-18"),
    comment: "",
  },
  {
    name: "АХ 8037 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2026-10-17"),
    comment: "",
  },
  {
    name: "АХ 8038 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2026-01-13"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "АХ 8394 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2026-10-30"),
    comment: "",
  },
  {
    name: "АХ 8820 47",
    fullname: "SCHMITZ SK024/L-COOL V7",
    date: new Date("2026-01-22"),
    comment: "",
  },
  {
    name: "АХ 9331 47",
    fullname: "SCHMITZ SK024/L-COOL V7",
    date: new Date("2026-02-05"),
    comment: "",
  },
  {
    name: "АХ 9708 47",
    fullname: "KRONE SD",
    date: new Date("2025-04-11"),
    comment: "",
  },
  {
    name: "АХ 9828 47",
    fullname: "SCHMITZ SK024/L-COOL V7",
    date: new Date("2025-05-24"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВА 3762 47",
    fullname: "SCHMITZ SK024/L-COOL V7",
    date: new Date("2025-09-22"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВА 3797 47",
    fullname: "SCHMITZ SK024/L-13.4FP60 COOL",
    date: new Date("2026-01-15"),
    comment: "",
  },
  {
    name: "ВА 4621 47",
    fullname: "SCHMITZ SCF24G",
    date: new Date("2025-05-08"),
    comment: "",
  },
  {
    name: "ВА 8177 47",
    fullname: "SCHMITZ SK024/L-16.8FP60 COOL",
    date: new Date("2026-05-25"),
    comment: "",
  },
  {
    name: "ВА 8188 47",
    fullname: "SCHMITZ SK024/L-16.8FP60 COOL V6",
    date: new Date("2026-04-03"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВА 8189 47",
    fullname: "SCHMITZ SK024/L-16.8FP60 COOL V6",
    date: new Date("2026-04-03"),
    comment: "4 года со дня регистрации (170-ФЗ р.15)",
  },
  {
    name: "ВА 8195 47",
    fullname: "SCHMITZ SK024/L-16.8FP60 COOL",
    date: new Date("2027-12-09"),
    comment: "",
  },
  {
    name: "ВА 8399 47",
    fullname: "SCHMITZ SK024/L-16.8FP60 COOL",
    date: new Date("2025-12-19"),
    comment: "",
  },
  {
    name: "ВВ 5123 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2028-06-06"),
    comment: "",
  },
  {
    name: "ВВ 5127 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2028-04-25"),
    comment: "",
  },
  {
    name: "ВК 3300 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2028-03-04"),
    comment: "",
  },
  {
    name: "ВК 3300 47",
    fullname: "SCHMITZ SK024/L-13.4FP COOL V7",
    date: new Date("2028-03-10"),
    comment: "",
  },
  {
    name: "ВМ 6270 78",
    fullname: "SCHMITZ SK024/L",
    date: new Date("2025-05-03"),
    comment: "",
  },
  {
    name: "ВН 1765 78",
    fullname: "KRONE SDR27",
    date: new Date("2025-08-03"),
    comment: "",
  },
  {
    name: "ВН 8163 78",
    fullname: "GRAY & ADAMS GA3B/5-R",
    date: new Date("2026-03-25"),
    comment: "",
  },
  {
    name: "ВО 1025 78",
    fullname: "GRAY & ADAMS GA2F/9",
    date: new Date("2025-12-04"),
    comment: "",
  },
  {
    name: "ВО 6247 78",
    fullname: "SCHMITZ SK024",
    date: new Date("2025-04-18"),
    comment: "",
  },
  {
    name: "ВР 4355 78",
    fullname: "KAESBOHRER",
    date: new Date("2025-07-16"),
    comment: "",
  },
  // ...
];

const objects2 = [
  {
    name: "А 644 КС 198",
    fullname: "INTERNATIONAL PROSTAR FL 627 PREMIUM",
    date: new Date("2026-11-26"),
    comment: "",
  },
  {
    name: "К 613 КУ 147",
    fullname: "DAF XF 480 FT",
    date: new Date("2025-08-15"),
    comment: "",
  },
  {
    name: "К 984 ЕО 147",
    fullname: "DAF XF 530 FT",
    date: new Date("2026-11-08"),
    comment: "",
  },
  {
    name: "В 618 РВ 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-10-03"),
    comment: "",
  },
  {
    name: "В 648 СМ 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-07-10"),
    comment: "",
  },
  {
    name: "В 915 РН 147",
    fullname: "RENAULT T 4x2",
    date: new Date("2025-08-31"),
    comment: "",
  },
  {
    name: "В 100 ТК 98",
    fullname: "VOLVO FH-Truck 6x2",
    date: new Date("2025-02-15"),
    comment: "Гулиев С.С.",
  },
  {
    name: "В 653 ХС 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2025-03-01"),
    comment: "Нет данных",
  },
  {
    name: "В 851 СК 47",
    fullname: "Volvo FH-Truck 4x2",
    date: new Date("2026-12-02"),
    comment: "",
  },
  {
    name: "Е 427 НК 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2026-11-08"),
    comment: "уточнить",
  },
  {
    name: "Е 932 НК 147",
    fullname: "Volvo FH-Truck 6x2",
    date: new Date("2026-11-28"),
    comment: "нет данных",
  },
  {
    name: "Е 465 МК 147",
    fullname: "SANY HQC240DE",
    date: new Date("2026-09-18"),
    comment: "",
  },
  {
    name: "К 586 СУ 147",
    fullname: "SANY HQC240DE",
    date: new Date("2026-08-23"),
    comment: "уточнить данные",
  },
  {
    name: "В 077 МК 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-03-03"),
    comment: "",
  },
  {
    name: "В 081 СО 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-06-23"),
    comment: "",
  },
  {
    name: "В 090 СО 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-06-20"),
    comment: "",
  },
  {
    name: "В 280 ОЕ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-08-13"),
    comment: "",
  },
  {
    name: "В 294 ВО 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-08-08"),
    comment: "",
  },
  {
    name: "В 294 ЕУ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-11-13"),
    comment: "Ремонт",
  },
  {
    name: "В 358 ОС 147",
    fullname: "SCANIA S500A 4X2 NA",
    date: new Date("2026-09-27"),
    comment: "",
  },
  {
    name: "В 401 ОА 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-10-04"),
    comment: "",
  },
  {
    name: "В 403 МС 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2026-09-16"),
    comment: "",
  },
  {
    name: "В 406 МУ 147",
    fullname: "SCANIA R410А 4X2 NA",
    date: new Date("2025-10-23"),
    comment: "",
  },
  {
    name: "В 657 СС 147",
    fullname: "SCANIA R4Х200 R450 A4x2NA",
    date: new Date("2025-06-28"),
    comment: "",
  },
  {
    name: "Р 773 КТ 98",
    fullname: "SCANIA R124 LA 4X2 NA420",
    date: new Date("2024-04-06"),
    comment: "Ремонт",
  },
  {
    name: "В 213 ТМ 47",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2026-01-29"),
    comment: "",
  },
  {
    name: "В 232 ЕУ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-09-21"),
    comment: "",
  },
  {
    name: "В 368 СУ 47",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2026-12-02"),
    comment: "",
  },
  {
    name: "В 395 ХТ 147",
    fullname: "MERCEDES-BENZ ACTROS 2545LS",
    date: new Date("2025-03-05"),
    comment: "",
  },
  {
    name: "В 496 ХХ 147",
    fullname: "MERCEDES-BENZ ACTROS 2544LS",
    date: new Date("2026-10-25"),
    comment: "",
  },
  {
    name: "В 668 НЕ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2027-01-15"),
    comment: "",
  },
  {
    name: "В 669 ХС 147",
    fullname: "MERCEDES-BENZ ACTROS 1845LS",
    date: new Date("2026-07-01"),
    comment: "",
  },
  {
    name: "В 986 ЕХ 147",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-10-12"),
    comment: "",
  },
  {
    name: "В 998 ХР 147",
    fullname: "MERCEDES-BENZ ACTROS 1845LS",
    date: new Date("2026-07-12"),
    comment: "",
  },
  {
    name: "Е 135 КЕ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-24"),
    comment: "",
  },
  {
    name: "Е 391 МК 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2026-11-14"),
    comment: "",
  },

  {
    name: "К 113 ОХ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-24"),
    comment: "",
  },
  {
    name: "К 363 АО 147",
    fullname: "MERCEDES-BENZ ACTROS 2541LS",
    date: new Date("2026-11-01"),
    comment: "",
  },
  {
    name: "К 355 ОТ 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2026-05-06"),
    comment: "",
  },
  {
    name: "К 632 ОВ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-07-24"),
    comment: "",
  },
  {
    name: "К 638 ОУ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-24"),
    comment: "",
  },
  {
    name: "К 674 ОУ 147",
    fullname: "MERCEDES-BENZ ACTROS 2648 LS",
    date: new Date("2026-01-24"),
    comment: "",
  },
  {
    name: "К 785 ОС 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2026-05-06"),
    comment: "",
  },
  {
    name: "К 802 ТУ 147",
    fullname: "MERCEDES-BENZ ACTROS",
    date: new Date("2026-12-20"),
    comment: "",
  },
  {
    name: "К 818 ОХ 147",
    fullname: "MERCEDES-BENZ ACTROS 1848 LS",
    date: new Date("2026-05-06"),
    comment: "",
  },
  {
    name: "К 837 ВК 147",
    fullname: "MERCEDES-BENZ ACTROS 2553 LS",
    date: new Date("2025-02-07"),
    comment: "",
  },
  {
    name: "К 840 ВК 147",
    fullname: "MERCEDES-BENZ ACTROS 2553 LS",
    date: new Date("2025-02-07"),
    comment: "",
  },
  {
    name: "О 735 РМ 47",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2025-11-13"),
    comment: "",
  },
  {
    name: "У 464 НА 178",
    fullname: "MERCEDES-BENZ ACTROS 1844LS",
    date: new Date("2026-11-06"),
    comment: "",
  },
  {
    name: "У 484 КС 178",
    fullname: "MERCEDES-BENZ ACTROS 1841LS",
    date: new Date("2025-09-25"),
    comment: "",
  },

  // ...
];

// Функция для вычисления разницы между двумя датами в формате месяцы:дни
function getTimeDifference(date1, date2) {
  let totalMonths =
    (date2.getFullYear() - date1.getFullYear()) * 12 +
    (date2.getMonth() - date1.getMonth());
  let totalDays = date2.getDate() - date1.getDate();

  if (totalDays < 0) {
    totalMonths -= 1;
    totalDays += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate(); // Последний день предыдущего месяца
  }

  return {
    months: totalMonths,
    days: totalDays,
    totalDays: (date2 - date1) / (1000 * 60 * 60 * 24),
  };
}

// Функция для форматирования даты на русском языке
function formatDateRussian(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// Шаг 2: Сортируем массив по дате (от ближайшей к текущей до дальней)
objects.sort((a, b) => a.date - b.date);
objects1.sort((a, b) => a.date - b.date);
objects2.sort((a, b) => a.date - b.date);

// Шаг 4: Функция для отображения объектов в HTML
function displayObjects(objectsToDisplay, containerId, isTacho = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов
  const now = new Date();

  objectsToDisplay.forEach((obj) => {
    const diff = getTimeDifference(now, obj.date);
    const div = document.createElement("div");
    div.className = isTacho ? "tacho" : "object";

    // Изменение фона контейнера в зависимости от времени до окончания
    if (diff.totalDays < 0) {
      div.classList.add("expired");
    } else if (diff.totalDays <= 15) {
      div.classList.add("warning");
    }

    div.innerHTML = isTacho
      ? `
      <h3>${obj.name}</h3>
      <h3>${obj.fullname}</h3>
      <p>Дата следующей калибровки: ${formatDateRussian(obj.date)}</p>
      <p>Комментарий: ${obj.comment}</p>
      <div class="time-difference">
        <div class="months">Месяцы: ${diff.months}</div>
        <div class="days">Дни: ${diff.days}</div>
      </div>
    `
      : `
      <h3>${obj.name}</h3>
      <h3>${obj.fullname}</h3>
      <p>Дата следующего ТО: ${formatDateRussian(obj.date)}</p>
      <p>Комментарий: ${obj.comment}</p>
      <div class="time-difference">
        <div class="months">Месяцы: ${diff.months}</div>
        <div class="days">Дни: ${diff.days}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Шаг 5: Функция для фильтрации объектов по поисковому запросу
function filterObjects() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredObjects = objects.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm) ||
      obj.fullname.toLowerCase().includes(searchTerm)
  );
  const filteredObjects1 = objects1.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm) ||
      obj.fullname.toLowerCase().includes(searchTerm)
  );
  const filteredObjects2 = objects2.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm) ||
      obj.fullname.toLowerCase().includes(searchTerm)
  );
  displayObjects(filteredObjects, "objects-container");
  displayObjects(filteredObjects1, "objects-container1");
  displayObjects(filteredObjects2, "objects-container2", true);
}

// Изначально отображаем все объекты
displayObjects(objects, "objects-container");
displayObjects(objects1, "objects-container1");
displayObjects(objects2, "objects-container2", true);
