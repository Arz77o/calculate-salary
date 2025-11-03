function calculate() {
    const rank = parseInt
    (document.getElementById("rank").value);
    
    const Values = {
        1: 400,
        2: 419,
        3: 440,
        4: 463,
        5: 488,
        6: 515,
        7: 548,
        8: 579,
        9: 618,
        10: 653,
        11: 698,
        12: 737,
        13: 778,
        14: 821,
        15: 866,
        16: 913,
        17: 962
    };

    if (Values[rank]) {
        const value = Values[rank];
        const salary = value * 45;
        document.getElementById
        ("result").innerText =
            `الأجر الأساسي = قيمة الصنف (${value}) × 45 = ${salary}`;
    } else {
        document.getElementById("result").innerText =
            "رقم الصنف غير موجود. حاول رقمًا بين 1 و17.";
    }
}

