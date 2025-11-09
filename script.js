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
        document.getElementById("basicValue").value = salary; 
        document.getElementById("savedRank").value = rank;
    } else {
        document.getElementById("result").innerText =
            "رقم الصنف غير موجود. حاول رقمًا بين 1 و17.";
    }
}

function calculateCompensation() {
    const category = parseInt(document.getElementById("category").value);
    const degree = parseInt(document.getElementById("degree").value);

    // جدول قيم الدرجات لكل صنف (17 صنف × 12 درجة)
    const Values = {
        1:  [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
        2:  [21, 42, 63, 84, 105, 126, 147, 168, 189, 210, 230, 251],
        3:  [22, 44, 66, 88, 110, 132, 154, 176, 198, 220, 242, 264],
        4:  [23, 46, 69, 93, 116, 139, 162, 185, 208, 232, 255, 278],
        5:  [24, 49, 73, 98, 122, 146, 171, 195, 220, 244, 268, 293],
        6:  [26, 52, 77, 103, 129, 155, 180, 206, 232, 258, 283, 309],
        7:  [27, 55, 82, 110, 137, 164, 192, 219, 247, 274, 301, 329],
        8:  [29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 318, 347],
        9:  [31, 62, 93, 124, 155, 185, 216, 247, 278, 309, 340, 371],
        10: [33, 65, 98, 131, 163, 196, 229, 261, 294, 327, 359, 392],
        11: [35, 70, 105, 140, 175, 209, 244, 279, 314, 349, 384, 419],
        12: [37, 74, 111, 147, 184, 221, 258, 295, 323, 369, 405, 442],
        13: [39, 78, 117, 156, 195, 233, 272, 311, 350, 389, 428, 467],
        14: [41, 82, 123, 164, 205, 246, 287, 328, 369, 411, 452, 493],
        15: [43, 87, 130, 173, 217, 260, 303, 346, 390, 433, 476, 520],
        16: [46, 91, 137, 183, 228, 274, 320, 365, 411, 457, 502, 548],
        17: [48, 96, 144, 192, 241, 289, 337, 385, 433, 481, 529, 577]
    };

    // التحقق من الصنف
    if (!Values[category]) {
        document.getElementById("result1").innerText =
            "رقم الصنف غير موجود. حاول رقمًا بين 1 و17.";
        return;
    }

    // التحقق من الدرجة
    if (isNaN(degree) || degree < 1 || degree > 12) {
        document.getElementById("result1").innerText =
            "رقم الدرجة يجب أن يكون بين 1 و12.";
        return;
    }

    // جلب قيمة الدرجة
    const value = Values[category][degree - 1];

    // الحساب
    const compensation = value * 45;

    const savedRank = parseInt(document.getElementById("savedRank").value);

    if (!savedRank) {
        document.getElementById("result1").innerText = " احسب الأجر الأساسي أولاً.";
        return;
    }

    if (category !== savedRank) {
        document.getElementById("result1").innerText = " رقم الصنف لا يطابق الصنف المستخدم في الأجر الأساسي.";
        return;
    }
    // عرض النتيجة بنفس أسلوبك
    document.getElementById("result1").innerText =
        `تعويضات الخبرة المهنية = قيمة الدرجة (${value}) × 45 = ${compensation}`; 
    document.getElementById("expValue").value = compensation; 
    updateTotal();
    }

    function updateTotal() {
    const basic = parseFloat(document.getElementById("basicValue").value) || 0;
    const exp = parseFloat(document.getElementById("expValue").value) || 0;
    const total = basic + exp;
    document.getElementById("totalValue").innerText =
        `الأجر الرئيسي = ${basic} + ${exp} = ${total}`;
    document.getElementById("totalValue").value = total;
    
    }
    
    function calculateSupportAllowance() {
    const total = parseFloat(document.getElementById("totalValue").value) || 0;
    const support = total * 0.10;
            document.getElementById("supportResult").innerText =
        `منحة دعم نشاط الإدارة = الأجر الرئيسي (${total}) × 10% = ${support.toFixed(2)}`;

    // حفظ القيمة إذا احتجتها لاحقًا
    document.getElementById("supportValue").value = support;
    }
    
    function calculateAdministrativeAllowance() {
    // جلب الأجر الرئيسي بعد الحساب (الأجر الأساسي + تعويض الخبرة)
    const total = parseFloat(document.getElementById("totalValue").value) || 0;

    // جلب رقم الصنف المستخدم في تعويضات الخبرة
    const category = parseInt(document.getElementById("category").value) || 0;

    // التحقق من الصنف
    if (category < 1 || category > 17) {
        document.getElementById("adminResult").innerText = "رقم الصنف غير موجود!";
        return;
    }

    // تحديد النسبة حسب الصنف
    let percentage = 0;
    if (category >= 1 && category <= 10) {
        percentage = 0.25; // 25%
    } else if (category >= 11 && category <= 17) {
        percentage = 0.40; // 40%
    }

    // حساب منحة الإدارية المشتركة
    const allowance = total * percentage;

    // عرض النتيجة
    document.getElementById("adminResult").innerText =
        `منحة الإدارية المشتركة = الأجر الرئيسي (${total}) × ${percentage*100}% = ${allowance.toFixed(2)}`;

    // حفظ القيمة إذا احتجتها لاحقًا
    document.getElementById("adminValue").value = allowance;
    }

   function calculateGrossSalary() {
  // القيم المحفوظة مسبقًا
  const basic = parseFloat(document.getElementById("totalValue")?.value) || 0;
  const support = parseFloat(document.getElementById("supportValue")?.value) || 0;
  const admin = parseFloat(document.getElementById("adminValue")?.value) || 0;
  const rank = parseInt(document.getElementById("savedRank")?.value) || 0; // رقم الصنف

  // جدول المنحة الجزافية حسب الصنف (1 إلى 17)
  const allowanceTable = {
    1: 7700,
    2: 7400,
    3: 6900,
    4: 6400,
    5: 5700,
    6: 5000,
    7: 3800,
    8: 3800,
    9: 3100,
    10: 3100,
    11: 1500,
    12: 1500,
    13: 1500,
    14: 1500,
    15: 1500,
    16: 1500,
    17: 1500
  };

  const fixedAllowance = allowanceTable[rank] || 0;

  if (basic === 0 || support === 0 || admin === 0 || rank === 0) {
    document.getElementById("grossResult").innerText = "⚠️ الرجاء حساب كل المنح والأجر الرئيسي أولاً.";
    return;
  }

  // حساب الأجر الخام
  const gross = basic + support + admin + fixedAllowance;

  // عرض النتيجة
  document.getElementById("grossResult").innerText =
    `الأجر الخام = ${basic} + ${support} + ${admin} + ${fixedAllowance} = ${gross}`;
  
  // حفظ القيمة
  document.getElementById("grossValue").value = gross;
}