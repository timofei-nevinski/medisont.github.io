//бланки
var bbmcContainer = document.getElementById("bbmcContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Брошюрованые издания</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costBBMC" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingBBMC" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBBMC()"  maxlength="255"  value="500"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatBBMC" name="formatBBMC" onchange="getPaperFormatBBMC(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBBMC" class="element text medium" type="number" min="0" oninput="getPaperFormatBBMC(false)" maxlength="255"  value="200" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBBMC" class="element text medium" type="number" min="0" oninput="getPaperFormatBBMC(false)" maxlength="255" value="200"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label  class="description">Переплёт</label>'
html +=             '<div>'
html +=                 '<select id="bindingBBMC" name="bindingBBMC" onchange="getPaperFormatBBMC(false)">'
html +=                     '<option value="0">Термо</option>'
html +=                     '<option value="1">7БЦ</option>'
html +=                     '<option value="2">Скобы</option>'
html +=                     '<option value="3">Пружина</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBBMC" class="element text medium" type="number" min="0" oninput="getPaperFormatBBMC(false)" maxlength="255" value="5"/> '
html +=             '</div>'
html +=         '</div>'		
html +=         '<div class="col-md-12 middle-header">'
html +=                 '<h3>Обложка</h3>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBBMC1" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC1()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBBMC1" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC1()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBBMC1" class="element text medium" type="number" min="0" oninput="getPrintedMachineBBMC1()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingBBMC1" name="varnishingBBMC1" onchange="getPrintedMachineBBMC1()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBBMC1" name="paperWeightBBMC" onchange="getPaperWeightBBMC1()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBBMC1" name="paperFormatBBMC" onchange="getPaperFormatBBMC1()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBBMC1" name="printedMachineBBMC" onchange="calculateBBMC()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBBMC" name="rentabilityBBMC" onchange="calculateBBMC()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 middle-header">'
html +=                 '<h3>Блок</h3>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBBMC2" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC2()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBBMC2" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC2()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBBMC2" class="element text medium" type="number" min="0" oninput="getPrintedMachineBBMC2()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingBBMC2" name="varnishingBBMC" onchange="getPrintedMachineBBMC2()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBBMC2" name="paperWeightBBMC" onchange="getPaperWeightBBMC2()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBBMC2" name="paperFormatBBMC" onchange="getPaperFormatBBMC2()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBBMC2" name="printedMachineBBMC" onchange="calculateBBMC2()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 middle-header">'
html +=                 '<h3>Вставки</h3>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBBMC3" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC3()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBBMC3" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC3()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBBMC3" class="element text medium" type="number" min="0" oninput="getPrintedMachineBBMC3()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingBBMC3" name="varnishingBBMC" onchange="getPrintedMachineBBMC3()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBBMC3" name="paperWeightBBMC" onchange="getPaperWeightBBMC3()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBBMC3" name="paperFormatBBMC" onchange="getPaperFormatBBMC3()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBBMC3" name="printedMachineBBMC" onchange="calculateBBMC3()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 middle-header">'
html +=                 '<h3>Форзацы</h3>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBBMC4" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC4()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBBMC4" class="element text medium" type="number" min="0" oninput="getPaperWeightBBMC4()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBBMC4" class="element text medium" type="number" min="0" oninput="getPrintedMachineBBMC4()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingBBMC4" name="varnishingBBMC" onchange="getPrintedMachineBBMC4()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBBMC4" name="paperWeightBBMC" onchange="getPaperWeightBBMC4()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBBMC4" name="paperFormatBBMC" onchange="getPaperFormatBBMC4()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBBMC4" name="printedMachineBBMC" onchange="calculateBBMC4()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-none">'

html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBBMCCuts1" ></label>'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBBMCCuts2" ></label>'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBBMCCuts3" ></label>'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBBMCCuts4" ></label>'
html +=                 '<br/><label id="checkBBMCField" class="description"></label>'
html +=                 '<br/><label id="checkBBMC" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
bbmcContainer.innerHTML = html;     

function BBMC() {
    getBBMCFormat();

    getPaperWeightBBMC1();
    getPrintedMachineBBMC1();
    getPaperFormatBBMC1();

    getPaperWeightBBMC2();
    getPrintedMachineBBMC2();
    getPaperFormatBBMC2();

    getPaperWeightBBMC3();
    getPrintedMachineBBMC3();
    getPaperFormatBBMC3();

    getPaperWeightBBMC4();
    getPrintedMachineBBMC4();
    getPaperFormatBBMC4();

    getRentabilityBBMC();
    getLaminadeBBMC();
    getStateElemBBMC(true);
}

function fullCalculateBBMC(){
    calculateBBMC1();
    calculateBBMC2();
    calculateBBMC3();
    calculateBBMC4();
}

function calculateBBMC1() {

    var labelCheck = document.getElementById('checkBBMC');
    var printing = Number(document.getElementById('printingBBMC').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBBMC1());
    var printedMachine = document.getElementById("printedMachineBBMC1").value;
    var rentabilityId = Number(document.getElementById("rentabilityBBMC").value); 
    var turnoverElem = document.getElementById('turnoverBBMC1');
   
    var paperFormat = document.getElementById("paperFormatBBMC1").value;

    var cut = Number(document.getElementById('checkBBMCCuts1').textContent);
    var varnishing = document.getElementById('varnishingBBMC1').value;
    var paperWeightValue = document.getElementById("paperWeightBBMC1").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBBMC1').value);
    var turnover = Number(document.getElementById('turnoverBBMC1').value);
    var pantone = Number(document.getElementById('pantoneBBMC1').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBBMC1()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + varnishing;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;



    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    checkLabel +="Общая стоимость: " + (allCost).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " BYN" +  "<br />";


    labelCheck.innerHTML = checkLabel;
}

function calculateBBMC2() {

    var labelCheck = document.getElementById('checkBBMC');
    var printing = Number(document.getElementById('printingBBMC').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBBMC2());
    var printedMachine = document.getElementById("printedMachineBBMC2").value;
    var rentabilityId = Number(document.getElementById("rentabilityBBMC").value); 
    var turnoverElem = document.getElementById('turnoverBBMC2');

    var paperFormat = document.getElementById("paperFormatBBMC2").value;

    var cut = Number(document.getElementById('checkBBMCCuts2').textContent);
    var varnishing = document.getElementById('varnishingBBMC2').value;
    var paperWeightValue = document.getElementById("paperWeightBBMC2").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBBMC2').value);
    var turnover = Number(document.getElementById('turnoverBBMC2').value);
    var pantone = Number(document.getElementById('pantoneBBMC2').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBBMC2()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + varnishing;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;


    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";


    checkLabel +="Общая стоимость: " + (allCost).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " BYN" +  "<br />";


    labelCheck.innerHTML = checkLabel;
}

function calculateBBMC3() {

    var labelCheck = document.getElementById('checkBBMC');
    var printing = Number(document.getElementById('printingBBMC').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBBMC3());
    var printedMachine = document.getElementById("printedMachineBBMC3").value;
    var rentabilityId = Number(document.getElementById("rentabilityBBMC").value); 
    var turnoverElem = document.getElementById('turnoverBBMC3');

    var paperFormat = document.getElementById("paperFormatBBMC3").value;

    var cut = Number(document.getElementById('checkBBMCCuts3').textContent);
    var varnishing = document.getElementById('varnishingBBMC3').value;
    var paperWeightValue = document.getElementById("paperWeightBBMC3").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBBMC3').value);
    var turnover = Number(document.getElementById('turnoverBBMC3').value);
    var pantone = Number(document.getElementById('pantoneBBMC3').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBBMC3()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + varnishing;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;



    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    checkLabel +="Общая стоимость: " + (allCost).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " BYN" +  "<br />";


    labelCheck.innerHTML = checkLabel;
}

function calculateBBMC4() {

    var labelCheck = document.getElementById('checkBBMC');
    var printing = Number(document.getElementById('printingBBMC').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBBMC4());
    var printedMachine = document.getElementById("printedMachineBBMC4").value;
    var rentabilityId = Number(document.getElementById("rentabilityBBMC").value); 
    var turnoverElem = document.getElementById('turnoverBBMC4');

    var paperFormat = document.getElementById("paperFormatBBMC4").value;

    var cut = Number(document.getElementById('checkBBMCCuts4').textContent);
    var varnishing = document.getElementById('varnishingBBMC4').value;
    var paperWeightValue = document.getElementById("paperWeightBBMC4").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBBMC4').value);
    var turnover = Number(document.getElementById('turnoverBBMC4').value);
    var pantone = Number(document.getElementById('pantoneBBMC4').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBBMC4()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + varnishing;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;



    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";


    checkLabel +="Общая стоимость: " + (allCost).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " BYN" +  "<br />";


    labelCheck.innerHTML = checkLabel;
}

function getStateElemBBMC(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampBBMC") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateBBMC1();
        calculateBBMC2(); 
        calculateBBMC3(); 
        calculateBBMC4();  
    };
}

function getNumberOfCutsBBMC1(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBBMCCuts1');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getNumberOfCutsBBMC2(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBBMCCuts2');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getNumberOfCutsBBMC3(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBBMCCuts3');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getNumberOfCutsBBMC4(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBBMCCuts4');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getRentabilityBBMC() {
    
    var rentability = document.getElementById("rentabilityBBMC"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonRAPM = jsonObj["RentabilityAllPrintingMachines"];
        jsonRAPM.forEach(function(rent){
            if(rent.id == elem.defaultRentabilityId){
                rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
            } else {
                rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
            }
        });
    }
}

function getLaminadeBBMC() {
    var laminade = document.getElementById("laminadeBBMC"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == "0"){
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
            }
        });
    }
    calculateBBMC1();
        calculateBBMC2(); 
        calculateBBMC3(); 
        calculateBBMC4(); 
}

function getBBMCFormat() {
    var formatBBMC = document.getElementById("formatBBMC");
    formatBBMC.options.length = 0;

    var jsonPB = jsonObj["Paper"]["BBMC"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatBBMC.options[formatBBMC.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatBBMC.options[formatBBMC.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatBBMC1(firstCall) {
    var paperFormat = document.getElementById("paperFormatBBMC1"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBBMC1").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBBMC1').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBBMC = +document.getElementById('formatBBMC').value;
        var printing = Number(document.getElementById('printingBBMC').value);
        var widthBBMC = document.getElementById('widthBBMC');
        var lengthBBMC = document.getElementById('lengthBBMC');
        var allowance = Number(document.getElementById('allowanceBBMC').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBBMC != 5){
                        widthBBMC.disabled = true;
                        lengthBBMC.disabled = true;
                        
                        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
                        width = jsonPBBMC.width;
                        length = jsonPBBMC.length;
                    }
                    else {
                        widthBBMC.disabled = false;
                        lengthBBMC.disabled = false;
                        
                        width = Number(document.getElementById('widthBBMC').value);
                        length = Number(document.getElementById('lengthBBMC').value);
                    }

                    width *= 2;
                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineBBMC1();
}

function getPaperFormatBBMC2(firstCall) {
    var paperFormat = document.getElementById("paperFormatBBMC2"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBBMC2").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBBMC2').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBBMC = +document.getElementById('formatBBMC').value;
        var printing = Number(document.getElementById('printingBBMC').value);
        var widthBBMC = document.getElementById('widthBBMC');
        var lengthBBMC = document.getElementById('lengthBBMC');
        var allowance = Number(document.getElementById('allowanceBBMC').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBBMC != 5){
                        widthBBMC.disabled = true;
                        lengthBBMC.disabled = true;
                        
                        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
                        width = jsonPBBMC.width;
                        length = jsonPBBMC.length;
                    }
                    else {
                        widthBBMC.disabled = false;
                        lengthBBMC.disabled = false;
                        
                        width = Number(document.getElementById('widthBBMC').value);
                        length = Number(document.getElementById('lengthBBMC').value);
                    }

                    width *= 2;
                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineBBMC2();
}
function getPaperFormatBBMC3(firstCall) {
    var paperFormat = document.getElementById("paperFormatBBMC3"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBBMC3").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBBMC3').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBBMC = +document.getElementById('formatBBMC').value;
        var printing = Number(document.getElementById('printingBBMC').value);
        var widthBBMC = document.getElementById('widthBBMC');
        var lengthBBMC = document.getElementById('lengthBBMC');
        var allowance = Number(document.getElementById('allowanceBBMC').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBBMC != 5){
                        widthBBMC.disabled = true;
                        lengthBBMC.disabled = true;
                        
                        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
                        width = jsonPBBMC.width;
                        length = jsonPBBMC.length;
                    }
                    else {
                        widthBBMC.disabled = false;
                        lengthBBMC.disabled = false;
                        
                        width = Number(document.getElementById('widthBBMC').value);
                        length = Number(document.getElementById('lengthBBMC').value);
                    }

                    width *= 2;
                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineBBMC3();
}
function getPaperFormatBBMC4(firstCall) {
    var paperFormat = document.getElementById("paperFormatBBMC4"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBBMC4").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBBMC4').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBBMC = +document.getElementById('formatBBMC').value;
        var printing = Number(document.getElementById('printingBBMC').value);
        var widthBBMC = document.getElementById('widthBBMC');
        var lengthBBMC = document.getElementById('lengthBBMC');
        var allowance = Number(document.getElementById('allowanceBBMC').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBBMC != 5){
                        widthBBMC.disabled = true;
                        lengthBBMC.disabled = true;
                        
                        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
                        width = jsonPBBMC.width;
                        length = jsonPBBMC.length;
                    }
                    else {
                        widthBBMC.disabled = false;
                        lengthBBMC.disabled = false;
                        
                        width = Number(document.getElementById('widthBBMC').value);
                        length = Number(document.getElementById('lengthBBMC').value);
                    }

                    width *= 2;
                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineBBMC4();
}

function numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBBMC = +document.getElementById('formatBBMC').value;
    var allowance = Number(document.getElementById('allowanceBBMC').value);
    var width = 0;
    var length = 0;

    if(formatBBMC != 5){
        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
        width = jsonPBBMC.width;
        length = jsonPBBMC.length;
    }
    else {
        width = Number(document.getElementById('widthBBMC').value);
        length = Number(document.getElementById('lengthBBMC').value);
    }

    width *= 2;
    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsBBMC1(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBBMC = +document.getElementById('formatBBMC').value;
    var allowance = Number(document.getElementById('allowanceBBMC').value);
    var width = 0;
    var length = 0;

    if(formatBBMC != 5){
        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
        width = jsonPBBMC.width;
        length = jsonPBBMC.length;
    }
    else {
        width = Number(document.getElementById('widthBBMC').value);
        length = Number(document.getElementById('lengthBBMC').value);
    }

    width *= 2;
    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsBBMC2(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBBMC = +document.getElementById('formatBBMC').value;
    var allowance = Number(document.getElementById('allowanceBBMC').value);
    var width = 0;
    var length = 0;

    if(formatBBMC != 5){
        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
        width = jsonPBBMC.width;
        length = jsonPBBMC.length;
    }
    else {
        width = Number(document.getElementById('widthBBMC').value);
        length = Number(document.getElementById('lengthBBMC').value);
    }

    width *= 2;
    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsBBMC3(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBBMC = +document.getElementById('formatBBMC').value;
    var allowance = Number(document.getElementById('allowanceBBMC').value);
    var width = 0;
    var length = 0;

    if(formatBBMC != 5){
        var jsonPBBMC = jsonObj["Paper"]["BBMC"][formatBBMC];
        width = jsonPBBMC.width;
        length = jsonPBBMC.length;
    }
    else {
        width = Number(document.getElementById('widthBBMC').value);
        length = Number(document.getElementById('lengthBBMC').value);
    }

    width *= 2;
    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsBBMC4(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function getPaperWeightBBMC1() {
    var paperWeight = document.getElementById("paperWeightBBMC1");
    var face = Number(document.getElementById('faceBBMC1').value);
    var turnover = Number(document.getElementById('turnoverBBMC1').value);

    if( paperWeight.options.length == 0 ) {

        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(papetType == "Mat" && elem.id =="7"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        } 
    }
    getPaperFormatBBMC1(false);
}
function getPaperWeightBBMC2() {
    var paperWeight = document.getElementById("paperWeightBBMC2");
    var face = Number(document.getElementById('faceBBMC2').value);
    var turnover = Number(document.getElementById('turnoverBBMC2').value);

    if( paperWeight.options.length == 0 ) {

        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(papetType == "Mat" && elem.id =="7"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        } 
    }
    getPaperFormatBBMC2(false);
}
function getPaperWeightBBMC3() {
    var paperWeight = document.getElementById("paperWeightBBMC3");
    var face = Number(document.getElementById('faceBBMC3').value);
    var turnover = Number(document.getElementById('turnoverBBMC3').value);

    if( paperWeight.options.length == 0 ) {

        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(papetType == "Mat" && elem.id =="7"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        } 
    }
    getPaperFormatBBMC3(false);
}
function getPaperWeightBBMC4() {
    var paperWeight = document.getElementById("paperWeightBBMC4");
    var face = Number(document.getElementById('faceBBMC4').value);
    var turnover = Number(document.getElementById('turnoverBBMC4').value);

    if( paperWeight.options.length == 0 ) {

        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(papetType == "Mat" && elem.id =="7"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        } 
    }
    getPaperFormatBBMC4(false);
}

function getNumberOfProductsBBMC1() {

    var allowance = document.getElementById('allowanceBBMC').value;
    var paperFormatB = document.getElementById("paperFormatBBMC1").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBBMC1").value;
    var labelCheck = document.getElementById('checkBBMCField');
    var printing = Number(document.getElementById('printingBBMC').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetBBMC1(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}

function getNumberOfProductsBBMC2() {

    var allowance = document.getElementById('allowanceBBMC').value;
    var paperFormatB = document.getElementById("paperFormatBBMC2").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBBMC2").value;
    var labelCheck = document.getElementById('checkBBMCField');
    var printing = Number(document.getElementById('printingBBMC').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetBBMC2(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}

function getNumberOfProductsBBMC3() {

    var allowance = document.getElementById('allowanceBBMC').value;
    var paperFormatB = document.getElementById("paperFormatBBMC3").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBBMC3").value;
    var labelCheck = document.getElementById('checkBBMCField');
    var printing = Number(document.getElementById('printingBBMC').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetBBMC3(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}

function getNumberOfProductsBBMC4() {

    var allowance = document.getElementById('allowanceBBMC').value;
    var paperFormatB = document.getElementById("paperFormatBBMC4").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBBMC4").value;
    var labelCheck = document.getElementById('checkBBMCField');
    var printing = Number(document.getElementById('printingBBMC').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetBBMC4(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}


function getPrintedMachineBBMC1(){
    var printedMachine = document.getElementById('printedMachineBBMC1');
    var face = Number(document.getElementById('faceBBMC1').value);
    var turnover = Number(document.getElementById('turnoverBBMC1').value);
    var pantone = Number(document.getElementById('pantoneBBMC1').value); 
    var varnishing = document.getElementById('varnishingBBMC1').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBBMC1").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateBBMC1();
}

function getPrintedMachineBBMC2(){
    var printedMachine = document.getElementById('printedMachineBBMC2');
    var face = Number(document.getElementById('faceBBMC2').value);
    var turnover = Number(document.getElementById('turnoverBBMC2').value);
    var pantone = Number(document.getElementById('pantoneBBMC2').value); 
    var varnishing = document.getElementById('varnishingBBMC2').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBBMC2").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateBBMC2();
}
function getPrintedMachineBBMC3(){
    var printedMachine = document.getElementById('printedMachineBBMC3');
    var face = Number(document.getElementById('faceBBMC3').value);
    var turnover = Number(document.getElementById('turnoverBBMC3').value);
    var pantone = Number(document.getElementById('pantoneBBMC3').value); 
    var varnishing = document.getElementById('varnishingBBMC3').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBBMC3").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateBBMC3();
}
function getPrintedMachineBBMC4(){
    var printedMachine = document.getElementById('printedMachineBBMC4');
    var face = Number(document.getElementById('faceBBMC4').value);
    var turnover = Number(document.getElementById('turnoverBBMC4').value);
    var pantone = Number(document.getElementById('pantoneBBMC4').value); 
    var varnishing = document.getElementById('varnishingBBMC4').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBBMC4").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateBBMC4();
}
//бирдекели
var bierdequelContainer = document.getElementById("bierdequelContainer");
var html = '<div class="row ">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Бирдекели</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costB" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingB" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBierdequels()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Формат</label>'			
html +=             '<div>'
html +=                 '<select id="formatB" name="formatB" onchange="getBierdequelsSize()"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">1-сторона</label>'			
html +=             '<div>'
html +=                 '<select id="side1" name="side1" onchange="getBierdequelsSide1()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'			
html +=             '<label class="description">2-сторона</label>'			
html +=             '<div>'
html +=                 '<select id="side2" name="side2" onchange="getBierdequelsSide2()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightB" name="paperWeight" onchange="getPaperWeightB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatB" name="paperFormat" onchange="getPaperFormatB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineB" name="printedMachine" onchange="calculateBierdequels() "></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityB" name="rentability" onchange="getRentabilityB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-none">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownB" name="cuttingDownB" class="col-md-1 checkbox"  type="checkbox" onchange="calculateBierdequels()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="stampB" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemB(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="stampB" class="element text medium" type="number" min="0" oninput="calculateBierdequels()"   value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=         '</div>'
html +=     '</div>'
html +=  '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label id="checkB" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataB" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
bierdequelContainer.innerHTML = html;     


function Bierdequels() {
    
    getPrintedMachineB();
    getPaperWeightB();
    getPaperFormatB();
    getRentabilityB();
    getBierdequelsFormat();
    getBierdequelsSize();
    getBierdequelsSide1();
    getBierdequelsSide2();
    getStateElemB(true);
}
 

function calculateBierdequels() {
    var labelCheck = document.getElementById('checkB');
    var printing = Number(document.getElementById('printingB').value);
    var numberOfPrintedSheets = Math.ceil(printing / getBierdequelsFormat());
    var printedMachine = document.getElementById("printedMachineB");
    var rentabilityId = Number(document.getElementById("rentabilityB").value); 
    var side1 = document.getElementById("side1").value;
    var cuttingDown = document.getElementById("cuttingDownB");
    var finalcost = document.getElementById('final-costB');
    var side2 = document.getElementById("side2").value;
    var paperFormat = document.getElementById("paperFormatB");
    var paperWeightValue = document.getElementById("paperWeightB"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var stamp = document.getElementById('stampB');
    var techDataB = document.getElementById('techDataB');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonPK = jsonObj["Paper"]["Kappa"][0]
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonL = jsonObj["Laminade"];
    var checkLabel = "";

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var pasting = 0;
    var face = 0;
    var turnover = 0;
    var montage = 0;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });

    numberOfKappas += numberOfPrintedSheets;
    numberOfKappas = Math.ceil(numberOfKappas / numberOfParts);
    checkLabel += "Количесвто изделий на листе: " + getBierdequelsFormat() + "<br />";
    checkLabel += "Количество каппы: " + numberOfKappas + "<br />";

    if(side2 != 4){
        numberOfPrintedSheets *=2
    }

    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
            rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость привертки: " + cutCost + "$" +  "<br />";

    side1 == 0 || side1 == 1 ? numberOfForms += 4 : "";
    side2 == 0 || side2 == 1 ? numberOfForms += 4 : "";
    
    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена одной формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Скорость печати: " + jsonPM.printSpeed  + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(numberOfForms / jsonPM.numberOfSections) ;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * jsonPM.printSpeedRatio))  * 3600 ) * iterations) + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * jsonPM.printSpeedRatio)) * 3600) * iterations) + fitting  + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";

    var kappaCost = numberOfKappas * jsonPK.price;
    checkLabel +="Стоимость каппы: " + kappaCost.toFixed(2) + "$" +  "<br />";

    var jsonPP = jsonObj["PostpressProcessing"]; 
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost + kappaCost;

    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(numberOfPrintedSheets < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";

    side2==4 ? pasting = 1 : pasting = 2;

    var jsonPast = jsonObj["Pasting"][pasting];
    allCost += (numberOfPrintedSheets * jsonPast.price );
    checkLabel +="Стоимость кашировки: " + (numberOfPrintedSheets * jsonPast.price ).toFixed(2) + "$" +  "<br />";

    var laminadeCost = 0;
    var laminadeTypeSide1 = 0;
    var laminadeTypeSide2 = 0;
    
    side1 == 0 ? laminadeTypeSide1 = 1 : laminadeTypeSide1 = 3;
    side2 == 0 || side2 == 2 ? laminadeTypeSide2 = 1: "";
    side2 == 1 || side2 == 3 ? numberOfForms += 4 : "";

    if(side2 == 0 || side2 == 2){
        laminadeTypeSide2 = 1
    } else if (side2 == 1 || side2 == 3){
        laminadeTypeSide2 = 3
    }
    else {
        laminadeTypeSide2 = 0;
    }

    var lamCost = 0;
    jsonL.forEach(function(elem){
        if(laminadeTypeSide1 == elem.id){
            laminadeCost = elem.price;
            lamCost += side2 == 4 ?  numberOfPrintedSheets * laminadeCost : (numberOfPrintedSheets / 2) * laminadeCost
        }
        if(laminadeTypeSide2 == elem.id){
            laminadeCost = elem.price;
            lamCost += side2 == 4 ?  numberOfPrintedSheets * laminadeCost : (numberOfPrintedSheets / 2) * laminadeCost
        }
    });
    
    allCost += lamCost;
    checkLabel +="Стоимость Ламинирования: " + lamCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Стоимость штампования: " + +stamp.value + " BYN" +  "<br />";

    checkLabel +="Общая стоимость: " + (allCost + (+stamp.value / jsonObjDollar)).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " BYN" +  "<br />";
    finalcost.innerHTML ="Цена: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataB() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade1 = "";
        var textLaminade2 = "";
        var textCuttingDown = "";
        var textStamp = "";
        var numberOfParts = 0;

        getNumberOfPartsB() != 6 ? numberOfParts = getNumberOfPartsB() + " части " : numberOfParts = getNumberOfPartsB() + " частей ";

        side2 == 0 || side2 == 1 ? montage = 2 : montage = 1;

        side1 == 0 ? textLaminade1 = " / ламинат Глянцевый х1" : textLaminade1 = " / ламинат Матовый х1"
        side2 == 0 || side2 == 2 ? textLaminade2 = " / ламинат Глянцевый х1" : ""
        side2 == 1 || side2 == 3 ? textLaminade2 = " / ламинат Матовый х1" : ""
        montage > 1 && montage != undefined ? textMontage = montage : textMontage =  1;
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 
        !stamp.disabled ? textStamp = "да"  : textStamp = "нет"; 
        side2 == 0 || side2 == 1 ? face = 4 : face = 0;
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">##Лицо бирдекеля</label><br/>'
        html +=         '<label class="description">**Цветность: **4+0 / Чужой оборот ' + " " + textLaminade1  + '</label><br/>'
        html +=         '<label class="description">##Оборот бирдекеля</label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + ' / Чужой оборот ' + " " + textLaminade2  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + (allFittingPaper / montage).toFixed()  + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=         '<label class="description">Кашировка: да</label><br/>';
        html +=         '<label class="description">Штамп: ' + textStamp + '</label><br/>';
        html +=     '</div> '

        return html;  
    }

    techDataB.innerHTML = showTechnicalDataB();
}

function getNumberOfPartsB() {
    var paperFormat = document.getElementById('paperFormatB').value; 
    var formatB = +document.getElementById('formatB').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    if(formatB == 3){
        width = Number(document.getElementById('widthB').value);
        length = Number(document.getElementById('lengthB').value);
    } else {
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["Bierdequels"][formatB];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    } 
    

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length || width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getStateElemB(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampB") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateBierdequels(); 
    };
}

function getPrintedMachineB(){
    var printedMachine = document.getElementById("printedMachineB");
    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightB").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
        }    
    });
}

function getPaperWeightB() {
    var paperWeight = document.getElementById("paperWeightB");

    if (paperWeight.options.length == 0){
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                if(elem.id == 4){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } 
            });
        }
    }
}

function getBierdequelsSide1() {
    var side1 = document.getElementById("side1");

    if (side1.options.length == 0){
        var jsonB = jsonObj["Paper"]["Bierdequels"][4]["Side1"];
        
        jsonB.forEach(function(elem) { 
            if(elem.id == '0'){
                side1.options[side1.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                side1.options[side1.options.length] = new Option(elem.name, elem.id);
            }   
        });
    }
    calculateBierdequels();
}

function getBierdequelsSide2() {
    var side2 = document.getElementById("side2");

    if (side2.options.length == 0){
        var jsonB = jsonObj["Paper"]["Bierdequels"][4]["Side2"];
        
        jsonB.forEach(function(elem) { 
            if(elem.id == '4'){
                side2.options[side2.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                side2.options[side2.options.length] = new Option(elem.name, elem.id);
            }   
        });
    }
    calculateBierdequels();
}

function getBierdequelsSize() {
    var formatB = document.getElementById("formatB");

    if (formatB.options.length == 0){
        var jsonB = jsonObj["Paper"]["Bierdequels"];
        
        jsonB.forEach(function(elem) { 
            if(elem.id == '0' || elem.id == '1' || elem.id == '2'|| elem.id == '3'){
                if(elem.id == '0'){
                    formatB.options[formatB.options.length] = new Option(elem.name, elem.id, true, true);
                } else {
                    formatB.options[formatB.options.length] = new Option(elem.name, elem.id);
                } 
            }
        });
    }
    getPaperFormatB(false);
}

function getRentabilityB() {
    var printedMachine = document.getElementById("printedMachineB").value;
    var rentability = document.getElementById("rentabilityB"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
    calculateBierdequels();
}

function getPaperFormatB(firstCall) {
    var paperFormat = document.getElementById("paperFormatB"); //получаем элемент по его ID
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
    var formatB = document.getElementById("formatB").value;
    var printing = Number(document.getElementById('printingB').value);
    var printedMachine = document.getElementById('printedMachineB').value;
    var paperWeightValue = document.getElementById("paperWeightB").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
    var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги

    var map = new Map();
    var widthB = document.getElementById('widthB');
    var lengthB = document.getElementById('lengthB');
    var allowanceB = document.getElementById('allowanceB');
    
    var jsonPF = jsonObj["Paper"]["Format"];
        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){
                    
                    width = Number(document.getElementById('widthB').value);
                    length = Number(document.getElementById('lengthB').value);
                    allowance = Number(document.getElementById('allowanceB').value);
                    width = width + (allowance * 2) // прибавляем припуски
                    length = length + (allowance * 2)
                    
                    if(formatB != 3){
                        widthB.disabled = true;
                        lengthB.disabled = true;
                        
                    }
                    else {
                        widthB.disabled = false;
                        lengthB.disabled = false;
                        
                    }
                    if(formatB == 0){
                        if(elem.id == '5'){
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        
                    } else if(formatB == 1 || formatB ==2) {
                        if(elem.id == '7'){
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        
                    } else {
                        

                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                
                                widthPrintedArea = (elem.width / 2) - 2; 
                                lengthPrintedArea = (elem.length / 2) -2;
                                

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });

                                if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                map.set(formatId, numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0;
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value
                                        maxK = key
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                            }
                        });
                    }
                    
                }
            });
        });
    
    }
    calculateBierdequels();
}

function numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, position, dev){
    var width = Number(document.getElementById('widthB').value); //получаем значения полей
    var length = Number(document.getElementById('lengthB').value);
    var allowance = Number(document.getElementById('allowanceB').value);
    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    return numberProduct
}

function getBierdequelsFormat() {
    var formatB = document.getElementById('formatB').value;
    
    var widthB = document.getElementById('widthB');
    var lengthB = document.getElementById('lengthB');
    var allowanceB = document.getElementById('allowanceB');
    var paperFormatB = document.getElementById("paperFormatB").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineB").value;
    var numberProductPerSheet = 0;
    var numberOfParts = 0;

    switch (+formatB) {
        case 0:
            numberProductPerSheet = 12;
            break;
        case 1:
            numberProductPerSheet = 15;
            break;
        case 2:
            numberProductPerSheet = 12;
            break;
        case 3:

            widthB += (allowanceB * 2) // прибавляем припуски
            lengthB += (allowanceB * 2)
        
            var widthPrintedArea = 0;
            var lengthPrintedArea = 0;

            var jsonCPF = jsonObj["Paper"]["Format"];
            
            jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                
                if(elem.id == paperFormatB){
                    paperWidth = elem.width;
                    paperLength = elem.length;
        
                    widthPrintedArea = (elem.width / 2) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    numberOfParts = 4;
                }
            });

            var jsonPM = jsonObj["PrintingMachine"];
            jsonPM.forEach(function(elem) {
                if(elem.id == printedMachine) { // для большей и меньшей стороны{}

                    if (widthPrintedArea > lengthPrintedArea){
                        lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                        widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                    } else {
                        lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                        widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                    }
                }
            });

            if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) ? numberProductPerSheet = numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", true) : numberProductPerSheet = numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", true);

            } else if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                numberOfPrintedSheets = numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", true)
            }
            else if(numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                numberOfPrintedSheets = numberProductPerSheetB(widthPrintedArea, lengthPrintedArea, "W", true)
            } else {
                numberOfPrintedSheets = "Ошибка"
            }

            break;
    }
    return numberProductPerSheet;
}


//бланки
var blanksContainer = document.getElementById("blanksContainer");

var html = '<div class="row ">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Бланки</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costBlanks" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingBlanks" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBlanks()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatBlanks" name="formatBlanks" onchange="getPaperFormatBlanks(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBlanks" class="element text medium" type="number" min="0" oninput="getPaperFormatBlanks(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBlanks" class="element text medium" type="number" min="0" oninput="getPaperFormatBlanks(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBlanks" class="element text medium" type="number" min="0" oninput="getPaperFormatBlanks(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBlanks" class="element text medium" type="number" min="0" oninput="getPrintedMachineBlanks()"  max="4"  value="1" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBlanks" class="element text medium" type="number" min="0" oninput="getPrintedMachineBlanks()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBlanks" class="element text medium" type="number" min="0" oninput="getPrintedMachineBlanks()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBlanks" name="paperWeightBlanks" onchange="getPaperWeightBlanks()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBlanks" name="paperFormatBlanks" onchange="getPaperFormatBlanks()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBlanks" name="printedMachineBlanks" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBlanks" name="rentabilityBlanks" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block ">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-4 padding-none">'				
html +=                 '<label class="description">Нумерация</label>'
html +=                 '<div>'
html +=                     '<select id="numerationBlanks" name="numerationBlanks" onchange="calculateBlanks()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">x1</option>'
html +=                     '<option value="2">x2</option></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBlanksCuts"></label>'
html +=                 '<br/><label id="checkBlanks" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataBlanks" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
blanksContainer.innerHTML = html;     

function Blanks() {
    getBlanksFormat();
    getPaperWeightBlanks();
    getPrintedMachineBlanks();
    getPaperFormatBlanks(false);
    getRentabilityBlanks();
}

function calculateBlanks() {
    var finalCostBlanks = document.getElementById('final-costBlanks');
    var labelCheck = document.getElementById('checkBlanks');
    var printing = Number(document.getElementById('printingBlanks').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBlanks());
    var printedMachine = document.getElementById("printedMachineBlanks");
    var cut = Number(document.getElementById('checkBlanksCuts').textContent);
    var rentabilityId = Number(document.getElementById("rentabilityBlanks").value); 
    var turnoverElem = document.getElementById('turnoverBlanks');
    var paperFormat = document.getElementById("paperFormatBlanks");
    var numerationBlanks = document.getElementById("numerationBlanks");
    var paperWeightValue = document.getElementById("paperWeightBlanks"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBlanks').value);
    var turnover = Number(document.getElementById('turnoverBlanks').value);
    var pantone = Number(document.getElementById('pantoneBlanks').value);
    var techDataBlanks = document.getElementById('techDataBlanks');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonPK = jsonObj["Paper"]["Kappa"][0]
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });

    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBlanks()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    
    numberOfForms = (face + turnover);
    
    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    }

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections);

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";

    var jsonPP = jsonObj["PostpressProcessing"]; 
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += (printing * jsonPP.numeration * numerationBlanks.value);
    checkLabel +="Стоимость нумерации: " + (printing * jsonPP.numeration * numerationBlanks.value).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostBlanks.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    

    function showTechnicalDataBlanks() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var numberOfParts = 0;

        getNumberOfPartsBlanks() != 6 ? numberOfParts = getNumberOfPartsBlanks() + " части " : numberOfParts = getNumberOfPartsBlanks() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = "";  
        montage > 1 && montage != undefined ? textMontage = " x " + montage : textMontage =  1;   
    
        html +=     '<div class="col-md-8 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + ' / Чужой оборот</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-8 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Нумерация: ' + (numerationBlanks.options[numerationBlanks.selectedIndex].text).toLowerCase() + '</label><br/>'
        html +=     '</div> '

        return html;  
    }

    techDataBlanks.innerHTML = showTechnicalDataBlanks();

}
function getNumberOfCutsBlanks(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBlanksCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getNumberOfPartsBlanks() {
    var paperFormat = document.getElementById('paperFormatBlanks').value; 
    var formatBlanks = document.getElementById('formatBlanks').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    if(formatBlanks == 5){
        width = Number(document.getElementById('widthBlanks').value);
        length = Number(document.getElementById('lengthBlanks').value);
    } else {
        var jsonPBlanks = jsonObj["Paper"]["Blanks"][formatBlanks];
        width = jsonPBlanks.width;
        length = jsonPBlanks.length;
    } 

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getRentabilityBlanks() {
    var printedMachine = document.getElementById("printedMachineBlanks").value;
    var rentability = document.getElementById("rentabilityBlanks"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getBlanksFormat() {
    var formatBlanks = document.getElementById("formatBlanks");
    formatBlanks.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Blanks"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '3'){
            formatBlanks.options[formatBlanks.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatBlanks.options[formatBlanks.options.length] = new Option(elem.name, elem.id);
        }   
    });
}



function getPaperFormatBlanks(firstCall) {
    var paperFormat = document.getElementById("paperFormatBlanks"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";

        var paperWeightValue = document.getElementById("paperWeightBlanks").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBlanks').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBlanks = +document.getElementById('formatBlanks').value;
        var printing = Number(document.getElementById('printingBlanks').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingBlanks').value);
        var widthBlanks = document.getElementById('widthBlanks');
        var lengthBlanks = document.getElementById('lengthBlanks');
        var allowance = Number(document.getElementById('allowanceBlanks').value);
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBlanks != 5){
                        widthBlanks.disabled = true;
                        lengthBlanks.disabled = true;
                        
                        var jsonPBlanks = jsonObj["Paper"]["Blanks"][formatBlanks];
                        width = jsonPBlanks.width;
                        length = jsonPBlanks.length;
                    }
                    else {
                        widthBlanks.disabled = false;
                        lengthBlanks.disabled = false;
                        
                        width = Number(document.getElementById('widthBlanks').value);
                        length = Number(document.getElementById('lengthBlanks').value);
                        
                    }

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    

                        if (width == length && width >= 200 && width <= 220){
                            if(elem.id == '7' ){ //id=7 72х104
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                            }
                            else {
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                            }
                        } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                            if(elem.id == '7' ){ //id=7 72х104
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                            }
                            else {
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                            }
                        } 
                        else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                            if(elem.id == '7' ){ //id=7 72х104
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                            }
                            else {
                                paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                            }
                        } 
                        else {
                            var jsonCPF = jsonObj["Paper"]["Format"];

                            jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                                if(elem.id == formatId){
                                    if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                        widthPrintedArea = elem.width - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (elem.id == "7"){
                                        if (width == length && width >= 200 && width <= 220){
                                            widthPrintedArea = (elem.width / 3) - 2; 
                                            lengthPrintedArea = (elem.length / 2) -2;
                                        } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                            widthPrintedArea = (elem.width / 3) - 2; 
                                            lengthPrintedArea = (elem.length / 2) -2;
                                        } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                            widthPrintedArea = (elem.width / 3) - 2; 
                                            lengthPrintedArea = (elem.length / 2) -2;
                                        } else {
                                            widthPrintedArea = (elem.width / 2) - 2; 
                                            lengthPrintedArea = (elem.length / 2) -2;
                                        }
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }

                                    var jsonPM = jsonObj["PrintingMachine"];
                                    jsonPM.forEach(function(elem) {
                                        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                            if (widthPrintedArea > lengthPrintedArea){
                                                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                            } else {
                                                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                            }
                                        }
                                    });

                                    if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                        numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", true))
                                    } else if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                        numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", true))
                                    }
                                    else if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                        numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", true))
                                    } else {
                                        numberOfPrintedSheets = "Ошибка"
                                    }

                                    isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                    map.set(formatId, +numberOfPrintedSheets);

                                    var maxK = 0,
                                        maxV = 0,
                                        i = 0;
                                    for (let [key, value] of map) {     // get data sorted
                                        if(i == 0){
                                            isNaN(value) ? value = Infinity: "";
                                            maxV=value;
                                            maxK = key;
                                            i++;
                                        }
                                        else{
                                            if (maxV > value){
                                                maxV = value;
                                                maxK = key;
                                            } 
                                        }
                                    }
                                    if(elem.id == maxK ){ 
                                        paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                    }
                                    else {
                                        paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                    }
                                }
                            });
                        }
                    
                }
            });
        });
    }
    
    getPrintedMachineBlanks();


}

function numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBlanks = +document.getElementById('formatBlanks').value;
    var allowance = Number(document.getElementById('allowanceBlanks').value);
    var width = 0;
    var length = 0;

    if(formatBlanks != 5){
        
        var jsonPBlanks = jsonObj["Paper"]["Blanks"][formatBlanks];
        width = jsonPBlanks.width;
        length = jsonPBlanks.length;
    }
    else {

        width = Number(document.getElementById('widthBlanks').value);
        length = Number(document.getElementById('lengthBlanks').value);
        
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)

   
        
        if(position == "W"){
            if (widthPrintedArea >= width && lengthPrintedArea >= length ){
                numberWidth = widthPrintedArea / width;
                numberLength = lengthPrintedArea / length;
                numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
            } else {
                numberProduct = "Ошибка"
            }
        } else {
            if (widthPrintedArea >= length && lengthPrintedArea >= width ){
                numberWidth = widthPrintedArea / length;
                numberLength = lengthPrintedArea / width;
                numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
            } else {
                numberProduct = "Ошибка"
            }
        }
    

    getNumberOfCutsBlanks(Math.trunc(numberWidth), Math.trunc(numberLength), allowance)

    return numberProduct
}

function getPaperWeightBlanks() {
    var paperWeight = document.getElementById("paperWeightBlanks");

    if (paperWeight.options.length == 0){
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonAdhesive = jsonObj["Paper"]["Adhesive"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonAdhesive, paperWeight, "Adhesive");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                if(papetType == "Offset" && elem.id =="1"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        }
    }
    getPaperFormatBlanks(false);
}

function getNumberOfProductsBlanks() {

    var allowanceB = document.getElementById('allowanceBlanks').value;
    var paperFormatB = document.getElementById("paperFormatBlanks").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBlanks").value;
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;

        var jsonCPF = jsonObj["Paper"]["Format"];
        
        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
            
            if(elem.id == paperFormatB){
                paperWidth = elem.width;
                paperLength = elem.length;
    
                widthPrintedArea = (elem.width / 2) - 2; 
                lengthPrintedArea = (elem.length / 2) -2;
                numberOfParts = 4;
            }
        });

        if(printedMachine != "") {

        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

                if (widthPrintedArea > lengthPrintedArea){
                    lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                    widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                } else {
                    lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                    widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                }
            }
        });

        if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetBlanks(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
    
    }
    
    return numberOfPrintedSheets;
}


function getPrintedMachineBlanks(){
    var printedMachine = document.getElementById("printedMachineBlanks");
    var face = Number(document.getElementById('faceBlanks').value);
    var turnover = Number(document.getElementById('turnoverBlanks').value);
    var pantone = Number(document.getElementById('pantoneBlanks').value); 

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBlanks").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && pantone == 0){
            if(paperType == "Offset"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } else if(face == 1 && pantone == 1 && paperType == "Offset"){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateBlanks();
}




//бланки
var bookletsContainer = document.getElementById("bookletsContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Буклеты</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costBooklets" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingBooklets" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBooklets()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatBooklets" name="formatBooklets" onchange="getPaperFormatBooklets(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBooklets" class="element text medium" type="number" min="0" onchange="getPaperWeightBooklets()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBooklets" class="element text medium" type="number" min="0" oninput="getPaperWeightBooklets()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBooklets" class="element text medium" type="number" min="0" oninput="getPrintedMachineBooklets()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingBooklets" name="varnishingBooklets" onchange="getPrintedMachineBooklets()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBooklets" name="paperWeightBooklets" onchange="getPaperWeightBooklets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBooklets" name="paperFormatBooklets" onchange="getPaperFormatBooklets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBooklets" name="printedMachineBooklets" onchange="calculateBooklets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBooklets" name="rentabilityBooklets" onchange="calculateBooklets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block ">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-4 padding-none">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeBooklets"  name="laminadeBooklets" onchange="getLaminadeBooklets()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=             '<div class="col-md-12 ">'
html +=                 '<div class="col-md-4">'				
html +=                    '<label><input name="scoringBooklets" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemBooklets(this)"><span class="col-md-11" >Биговка</span> </label>'
html +=               '</div>'
html +=               '<div class="col-md-1 padding-none">'
html +=                   '<input id="scoringBooklets" class=" element text medium" type="number" min="0" oninput="calculateBooklets()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=             '<div class="col-md-12">'
html +=                 '<div class="col-md-4">'				
html +=                   '<label><input name="foldingBooklets" class="col-md-1 checkbox" checked type="checkbox" onchange="getStateElemBooklets(this)"><span>Фальцовка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="foldingBooklets" class="element text medium" type="number" min="0" oninput="calculateBooklets()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkBookletsCuts" ></label></label>'
html +=                 '<br/><label id="checkBookletsField" class="description"></label>'
html +=                 '<br/><label id="checkBooklets" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataBooklets" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
bookletsContainer.innerHTML = html;     

function Booklets() {
    getBookletsFormat();
    getPaperWeightBooklets();
    getPrintedMachineBooklets();
    getPaperFormatBooklets();
    getRentabilityBooklets();
    getLaminadeBooklets();
    getStateElemBooklets(document.querySelector('input[name=foldingBooklets]:checked'));
}

function calculateBooklets() {
    var finalCostBooklets = document.getElementById('final-costBooklets');
    var labelCheck = document.getElementById('checkBooklets');
    var printing = Number(document.getElementById('printingBooklets').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsBooklets());
    var printedMachine = document.getElementById("printedMachineBooklets");
    var rentabilityId = Number(document.getElementById("rentabilityBooklets").value); 
    var turnoverElem = document.getElementById('turnoverBooklets');
    var cut = document.getElementById('checkBookletsCuts').textContent;
    var laminade = document.getElementById('laminadeBooklets');
    var paperFormat = document.getElementById("paperFormatBooklets");
    var scoring = document.getElementById('scoringBooklets');
    var folding = document.getElementById('foldingBooklets');
    var varnishing = document.getElementById('varnishingBooklets');
    var paperWeightValue = document.getElementById("paperWeightBooklets"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBooklets').value);
    var turnover = Number(document.getElementById('turnoverBooklets').value);
    var pantone = Number(document.getElementById('pantoneBooklets').value);
    var techDataBooklets = document.getElementById('techDataBooklets');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var checkLabel = "";
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var varnishingCost = 0;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBooklets()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0

    }
    numberOfForms = (face + turnover + +varnishing.value);
   
    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";


    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    allCost += (printing * jsonPP.scoring * +scoring.value);
    checkLabel +="Стоимость биговка: " + (printing * jsonPP.scoring * +scoring.value).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.folding * +folding.value);
    checkLabel +="Стоимость Фальцовка: " + (printing * jsonPP.folding * +folding.value).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostBooklets.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataBooklets() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textFolding = "";
        var textScoring = "";
        var numberOfParts = 0;

        getNumberOfPartsBooklets() != 6 ? numberOfParts = getNumberOfPartsBooklets() + " части " : numberOfParts = getNumberOfPartsBooklets() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        !scoring.disabled ? textScoring = "да" : textScoring = "нет";
        !folding.disabled ? textFolding = "да"  : textFolding = "нет"; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=          textVarnishingUV;
        html +=         '<label class="description">Биговка: ' + textScoring + '</label><br/>';
        html +=         '<label class="description">Фальцовка: ' + textFolding + '</label><br/>';
        html +=     '</div> '

        return html;  
    }

    techDataBooklets.innerHTML = showTechnicalDataBooklets();

}

function getNumberOfPartsBooklets() {
    var paperFormat = document.getElementById('paperFormatBooklets').value; 
    var formatBooklets = +document.getElementById('formatBooklets').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    
    if(formatBooklets == 4){
        width = Number(document.getElementById('widthBooklets').value);
        length = Number(document.getElementById('lengthBooklets').value);
    } else {
        var jsonPBooklets = jsonObj["Paper"]["Booklets"][formatBooklets];
        width = jsonPBooklets.width;
        length = jsonPBooklets.length;
    } 

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getNumberOfCutsBooklets(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBookletsCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getStateElemBooklets(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "foldingBooklets") {
                elemField.disabled = false; elemField.value = 1;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateBooklets();
        
    };


}

function getRentabilityBooklets() {
    var printedMachine = document.getElementById("printedMachineBooklets").value;
    var rentability = document.getElementById("rentabilityBooklets"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadeBooklets() {
    var laminade = document.getElementById("laminadeBooklets"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculateBooklets();
}

function getBookletsFormat() {
    var formatBooklets = document.getElementById("formatBooklets");
    formatBooklets.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Booklets"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '1'){
            formatBooklets.options[formatBooklets.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatBooklets.options[formatBooklets.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatBooklets(firstCall) {
    var paperFormat = document.getElementById("paperFormatBooklets"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBooklets").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBooklets').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBooklets = +document.getElementById('formatBooklets').value;
        var printing = Number(document.getElementById('printingBooklets').value);
        var scoring = document.querySelector('input[name=scoringBooklets]');
        
        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        
        var widthBooklets = document.getElementById('widthBooklets');
        var lengthBooklets = document.getElementById('lengthBooklets');
        var allowance = Number(document.getElementById('allowanceBooklets').value);
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        var elemField = document.getElementById("scoringBooklets");
          

        jsonP.weight >= 170 ? scoring.checked = true : scoring.checked = false;
           
        if(scoring.checked) { 
            elemField.disabled = false; elemField.value = 1;
        }
        else {
            elemField.disabled = true; elemField.value = 0;
        }
        

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBooklets != 4){
                        widthBooklets.disabled = true;
                        lengthBooklets.disabled = true;
                        
                        var jsonPBooklets = jsonObj["Paper"]["Booklets"][formatBooklets];
                        width = jsonPBooklets.width;
                        length = jsonPBooklets.length;
                    }
                    else {
                        widthBooklets.disabled = false;
                        lengthBooklets.disabled = false;
                        
                        width = Number(document.getElementById('widthBooklets').value);
                        length = Number(document.getElementById('lengthBooklets').value);
                        
                    }

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });

                                if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineBooklets();
}

function numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, position, dev){
    var printing = Number(document.getElementById('printingBooklets').value);
    var formatBooklets = +document.getElementById('formatBooklets').value;
    var allowance = Number(document.getElementById('allowanceBooklets').value);
    
    var width = 0;
    var length = 0;
    

    if(formatBooklets != 4){
        
        var jsonPBooklets = jsonObj["Paper"]["Booklets"][formatBooklets];
        width = jsonPBooklets.width;
        length = jsonPBooklets.length;
    }
    else {

        width = Number(document.getElementById('widthBooklets').value);
        length = Number(document.getElementById('lengthBooklets').value);
        
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
            
        } else {
            numberProduct = "Ошибка"
        }
        
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
            
        } else {
            numberProduct = "Ошибка"
        }
       
    }

    getNumberOfCutsBooklets(Math.trunc(numberWidth), Math.trunc(numberLength), allowance)

    return numberProduct
}

function getPaperWeightBooklets() {
    var paperWeight = document.getElementById("paperWeightBooklets");
    var face = Number(document.getElementById('faceBooklets').value);
    var turnover = Number(document.getElementById('turnoverBooklets').value);
    var paperWeightValue = document.getElementById("paperWeightBooklets").value; //получаем value выбранного элемента option по ID элемента select 
    var paperTypeBooklets = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperWeightBooklets = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем тип бумаги
    var defcalc = paperWeight.getAttribute("defcalcBooklets");

    if( paperWeight.options.length == 0 || face == 1 && turnover == 1 && defcalc == "false") {
        face == 1 && turnover == 1 ? paperWeight.options.length = 0 : "";
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonAdhesive = jsonObj["Paper"]["Adhesive"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonAdhesive, paperWeight, "Adhesive");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(face == 1 && turnover == 1 && defcalc == "false"){
                    if(papetType == "Offset" && elem.id =="1"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                    htmlObj.setAttribute("defcalcBooklets", true)
                } 
                else {
                    if(papetType == "Glossy" && elem.id =="3"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                    htmlObj.setAttribute("defcalcBooklets", false)
                }

            });
        }
    }
    getPaperFormatBooklets(false);
}

function getNumberOfProductsBooklets() {
    var allowance = document.getElementById('allowanceBooklets').value;
    var paperFormat = document.getElementById("paperFormatBooklets").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBooklets").value;
    var labelCheck = document.getElementById('checkBookletsField');
    var printing = Number(document.getElementById('printingBooklets').value);
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var checkLabel = "";
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;

        var jsonCPF = jsonObj["Paper"]["Format"];
        
        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
            
            if(elem.id == paperFormat){
                paperWidth = elem.width;
                paperLength = elem.length;

                paperWidth += (allowance * 2) // прибавляем припуски
                paperLength += (allowance * 2)
    
                widthPrintedArea = (elem.width / 2) - 2; 
                lengthPrintedArea = (elem.length / 2) -2;
                numberOfParts = 4;
            }
        });

        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(elem.id == printedMachine) { // для большей и меньшей стороны{}

                if (widthPrintedArea > lengthPrintedArea){
                    lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                    widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                } else {
                    lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                    widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                }
            }
        });

        checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
        checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
        checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
        checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
        checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";

        if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetBooklets(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
        labelCheck.innerHTML = checkLabel;

    return numberOfPrintedSheets;
}


function getPrintedMachineBooklets(){
    var printedMachine = document.getElementById("printedMachineBooklets");
    var face = Number(document.getElementById('faceBooklets').value);
    var turnover = Number(document.getElementById('turnoverBooklets').value);
    var pantone = Number(document.getElementById('pantoneBooklets').value); 
    var varnishing = document.getElementById('varnishingBooklets').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBooklets").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });

    calculateBooklets();
}
//бланки
var cuttingEnvelopesContainer = document.getElementById("cuttingEnvelopesContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Конверты вырубные</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costCuttingEnvelopes" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingCuttingEnvelopes" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateCuttingEnvelopes()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatCuttingEnvelopes" name="formatCuttingEnvelopes" onchange="getPaperFormatCuttingEnvelopes(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-12"></div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperWeightCuttingEnvelopes()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperWeightCuttingEnvelopes()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPrintedMachineCuttingEnvelopes()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingCuttingEnvelopes" name="varnishingCuttingEnvelopes" onchange="getPrintedMachineCuttingEnvelopes()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightCuttingEnvelopes" name="paperWeightCuttingEnvelopes" onchange="getPaperWeightCuttingEnvelopes()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatCuttingEnvelopes" name="paperFormatCuttingEnvelopes" onchange="getPaperFormatCuttingEnvelopes()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineCuttingEnvelopes" name="printedMachineCuttingEnvelopes" onchange="calculateCuttingEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityCuttingEnvelopes" name="rentabilityCuttingEnvelopes" onchange="calculateCuttingEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-none">'
html +=             '<div class="col-md-4 ">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeCuttingEnvelopes"  name="laminadeCuttingEnvelopes" onchange="getLaminadeCuttingEnvelopes()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=             '<div class="col-md-6 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownCuttingEnvelopes" name="cuttingDownCuttingEnvelopes" class="col-md-1 checkbox"  type="checkbox" onchange="calculateCuttingEnvelopes()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="scotchCuttingEnvelopes" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemCuttingEnvelopes(this)"><span>Cклейка скотч, см</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="scotchCuttingEnvelopes" class="element text medium" type="number" step="0.5" min="0" oninput="calculateCuttingEnvelopes()"   value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="stampCuttingEnvelopes" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemCuttingEnvelopes(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="stampCuttingEnvelopes" class="element text medium" step=0.1 type="number" min="0" oninput="calculateCuttingEnvelopes()"  max="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label id="checkCuttingEnvelopesField" class="description"></label>'
html +=                 '<label id="checkCuttingEnvelopes" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataCuttingEnvelopes" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
cuttingEnvelopesContainer.innerHTML = html;     

function CuttingEnvelopes() {
    getCuttingEnvelopesFormat();
    getPaperWeightCuttingEnvelopes();
    getPrintedMachineCuttingEnvelopes();
    getPaperFormatCuttingEnvelopes();
    getRentabilityCuttingEnvelopes();
    getLaminadeCuttingEnvelopes();
    getScotchCuttingEnvelopes();
    getStateElemCuttingEnvelopes(true);
}

function calculateCuttingEnvelopes() {
    var finalCostCuttingEnvelopes = document.getElementById('final-costCuttingEnvelopes');
    var labelCheck = document.getElementById('checkCuttingEnvelopes');
    var printing = Number(document.getElementById('printingCuttingEnvelopes').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsCuttingEnvelopes());
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes");
    var rentabilityId = Number(document.getElementById("rentabilityCuttingEnvelopes").value); 
    var turnoverElem = document.getElementById('turnoverCuttingEnvelopes');
    var laminade = document.getElementById('laminadeCuttingEnvelopes');
    var paperFormat = document.getElementById("paperFormatCuttingEnvelopes");
    var stamp = document.getElementById('stampCuttingEnvelopes');
    var scotch = document.getElementById('scotchCuttingEnvelopes');
    var varnishing = document.getElementById('varnishingCuttingEnvelopes');
    var paperWeightValue = document.getElementById("paperWeightCuttingEnvelopes"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var techDataCuttingEnvelopes = document.getElementById('techDataCuttingEnvelopes');
    var face = Number(document.getElementById('faceCuttingEnvelopes').value);
    var turnover = Number(document.getElementById('turnoverCuttingEnvelopes').value);
    var pantone = Number(document.getElementById('pantoneCuttingEnvelopes').value);
    var cuttingDown = document.getElementById("cuttingDownCuttingEnvelopes");
    
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonG = jsonObj["Gluing"][0];
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var checkLabel = "";
    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsCuttingEnvelopes()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    } else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0

    }
    numberOfForms = (face + turnover + +varnishing.value);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    } 

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(numberOfPrintedSheets < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";
   
    checkLabel +="Стоимость штампования: " + (+stamp.value).toFixed(2) + "BYN" +  "<br />";

    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";
    
    allCost += (printing * +scotch.value * jsonG.scotch)
    checkLabel +="Стоимость склейки Скотч: " + (printing * +scotch.value * jsonG.scotch).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + (allCost + (+stamp.value / jsonObjDollar)).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " BYN" +  "<br />";
    finalCostCuttingEnvelopes.innerHTML = "Цена: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " руб." ;

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataCuttingEnvelopes() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textCuttingDown = "";
        var textStamp = "";
        var textScotchCuttingEnvelopes = "";
        var numberOfParts = 0;

        getNumberOfPartsCuttingEnvelopes() != 6 ? numberOfParts = getNumberOfPartsCuttingEnvelopes() + " части " : numberOfParts = getNumberOfPartsCuttingEnvelopes() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 
        !scotch.disabled ? textScotchCuttingEnvelopes = "да" : textScotchCuttingEnvelopes = "нет";
        !stamp.disabled ? textStamp = "да"  : textStamp = "нет"; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=          textVarnishingUV;
        html +=         '<label class="description">Склейка: ' + textScotchCuttingEnvelopes + '</label><br/>';
        html +=         '<label class="description">Штамп: ' + textStamp + '</label><br/>';
        html +=     '</div> '

        return html;  
    }

    techDataCuttingEnvelopes.innerHTML = showTechnicalDataCuttingEnvelopes();

}

function getNumberOfPartsCuttingEnvelopes() {
    var paperFormat = document.getElementById('paperFormatCuttingEnvelopes').value; 
    var formatCuttingEnvelopes = +document.getElementById('formatCuttingEnvelopes').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getStateElemCuttingEnvelopes(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampCuttingEnvelopes") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateCuttingEnvelopes(); 
    };
}

function getRentabilityCuttingEnvelopes() {
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes").value;
    var rentability = document.getElementById("rentabilityCuttingEnvelopes"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadeCuttingEnvelopes() {
    var laminade = document.getElementById("laminadeCuttingEnvelopes"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == 0 || elem.id == 1 || elem.id == 3 || elem.id == 5){
                if(elem.id == "0"){
                    laminade.options[laminade.options.length] = new Option(elem.name, elem.id, true, true);
                } else {
                    laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
                }
            }
        });
    }
    calculateCuttingEnvelopes();
}

function getCuttingEnvelopesFormat() {
    var formatCuttingEnvelopes = document.getElementById("formatCuttingEnvelopes");
    formatCuttingEnvelopes.options.length = 0;

    var jsonPB = jsonObj["Paper"]["CuttingEnvelopes"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatCuttingEnvelopes.options[formatCuttingEnvelopes.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatCuttingEnvelopes.options[formatCuttingEnvelopes.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatCuttingEnvelopes(firstCall) {
    var paperFormat = document.getElementById("paperFormatCuttingEnvelopes"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightCuttingEnvelopes").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineCuttingEnvelopes').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatCuttingEnvelopes = +document.getElementById('formatCuttingEnvelopes').value;
        var printing = Number(document.getElementById('printingCuttingEnvelopes').value);
    
        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingCuttingEnvelopes').value);
        var widthCuttingEnvelopes = document.getElementById('widthCuttingEnvelopes');
        var lengthCuttingEnvelopes = document.getElementById('lengthCuttingEnvelopes');
        var allowance = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;     

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){
    
                    var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
                    width = jsonPCuttingEnvelopes.width;
                    length = jsonPCuttingEnvelopes.length;

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                            
                                if(numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";                              

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getScotchCuttingEnvelopes();
    getPrintedMachineCuttingEnvelopes();
}

function numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatCuttingEnvelopes = +document.getElementById('formatCuttingEnvelopes').value;
    var allowance = 0;
    var width = 0;
    var length = 0;

    var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
                        width = jsonPCuttingEnvelopes.width;
                        length = jsonPCuttingEnvelopes.length;
    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    return numberProduct
}

function getPaperWeightCuttingEnvelopes() {
    var paperWeight = document.getElementById("paperWeightCuttingEnvelopes");
    var face = Number(document.getElementById('faceCuttingEnvelopes').value);
    var turnover = Number(document.getElementById('turnoverCuttingEnvelopes').value);
    var defcalc = paperWeight.getAttribute("defcalcCuttingEnvelopes");
    if( paperWeight.options.length == 0 || face == 4 && turnover == 4 && defcalc == "false") {
        face == 4 && turnover == 4 ? paperWeight.options.length = 0 : "";
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");

        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                
                if(papetType == "Carton" && elem.id =="2"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
                
                
            });
        } 
    } 
    getPaperFormatCuttingEnvelopes(false);
}

function getNumberOfProductsCuttingEnvelopes() {
    var formatCuttingEnvelopes = +document.getElementById("formatCuttingEnvelopes").value;
    var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];

    return jsonPCuttingEnvelopes.numberOfProducts;
}

function getScotchCuttingEnvelopes() {
    var formatCuttingEnvelopes = +document.getElementById("formatCuttingEnvelopes").value;
    var scotch = document.getElementById("scotchCuttingEnvelopes");
    var scotchChecked = document.querySelector('input[name=scotchCuttingEnvelopes]');
    var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];

    if(jsonPCuttingEnvelopes.scotch == 0){
        scotchChecked.checked = false;
        scotch.value = 0;
        scotch.disabled = true
    } else {
        scotchChecked.checked = true;
        scotch.value = jsonPCuttingEnvelopes.scotch;
        scotch.disabled = false
    }
}

function getPrintedMachineCuttingEnvelopes(){
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes");
    var face = Number(document.getElementById('faceCuttingEnvelopes').value);
    var turnover = Number(document.getElementById('turnoverCuttingEnvelopes').value);
    var pantone = Number(document.getElementById('pantoneCuttingEnvelopes').value); 
    var varnishing = document.getElementById('varnishingCuttingEnvelopes').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightCuttingEnvelopes").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(elem.id != "2"){
            if(face > 2){
                if(elem.id == '0'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else if(face == 2){
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } 
            else {
                if(elem.id == '1'){
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }  
                else{
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                } 
            }   
        } 
    });
    calculateCuttingEnvelopes();
}
//бланки
var flyersContainer = document.getElementById("flyersContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Листовки</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costFlyers" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingFlyers" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateFlyers()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatFlyers" name="formatFlyers" onchange="getPaperFormatFlyers(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthFlyers" class="element text medium" type="number" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthFlyers" class="element text medium" type="number" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceFlyers" class="element text medium" type="number" defAllow="false" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceFlyers" class="element text medium" type="number" min="0" oninput="getPaperWeightFlyers()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverFlyers" class="element text medium" type="number" min="0" oninput="getPaperWeightFlyers()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneFlyers" class="element text medium" type="number" min="0" oninput="getPrintedMachineFlyers()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingFlyers" name="varnishingFlyers" onchange="getPrintedMachineFlyers()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightFlyers" name="paperWeightFlyers" onchange="getPaperWeightFlyers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatFlyers" name="paperFormatFlyers" onchange="getPaperFormatFlyers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineFlyers" name="printedMachineFlyers" onchange="calculateFlyers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityFlyers" name="rentabilityFlyers" onchange="calculateFlyers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeFlyers"  name="laminadeFlyers" onchange="getLaminadeFlyers()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkFlyersCuts" ></label>'
html +=                 '<br/><label id="checkFlyersField" class="description"></label>'
html +=                 '<br/><label id="checkFlyers" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataFlyers" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
flyersContainer.innerHTML = html;     

function Flyers() {
    getFlyersFormat();
    getPaperWeightFlyers();
    getPrintedMachineFlyers();
    getPaperFormatFlyers(false);
    getRentabilityFlyers();
    getLaminadeFlyers();
    getStateElemFlyers(true);
}

function calculateFlyers() {
    var finalCostFlyers = document.getElementById('final-costFlyers');
    var labelCheck = document.getElementById('checkFlyers');
    var printing = Number(document.getElementById('printingFlyers').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsFlyers());
    var printedMachine = document.getElementById("printedMachineFlyers");
    var rentabilityId = Number(document.getElementById("rentabilityFlyers").value); 
    var turnoverElem = document.getElementById('turnoverFlyers');
    var laminade = document.getElementById('laminadeFlyers');
    var paperFormat = document.getElementById("paperFormatFlyers");
    var cut = Number(document.getElementById('checkFlyersCuts').textContent);
    var varnishing = document.getElementById('varnishingFlyers');
    var paperWeightValue = document.getElementById("paperWeightFlyers"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceFlyers').value);
    var turnover = Number(document.getElementById('turnoverFlyers').value);
    var pantone = Number(document.getElementById('pantoneFlyers').value);
    var techDataFlyers = document.getElementById('techDataFlyers');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsFlyers()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    } else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0
    }
    numberOfForms = (face + turnover + +varnishing.value);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";


    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

   
   

    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostFlyers.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataFlyers() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var numberOfParts = 0;

        getNumberOfPartsFlyers() != 6 ? numberOfParts = getNumberOfPartsFlyers() + " части " : numberOfParts = getNumberOfPartsFlyers() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=          textVarnishingUV;
        html +=     '</div> '

        return html;  
    }

    techDataFlyers.innerHTML = showTechnicalDataFlyers();
}

function getNumberOfPartsFlyers() {
    var paperFormat = document.getElementById('paperFormatFlyers').value; 
    var formatFlyers = +document.getElementById('formatFlyers').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    
    if(formatFlyers == 6){
        width = Number(document.getElementById('widthFlyers').value);
        length = Number(document.getElementById('lengthFlyers').value);
    } else {
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["Flyers"][formatFlyers];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    } 
    
    formatFlyers == 5 ? allowance = 1 : allowance = 2;

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length || width >= 200 && width <= 220 && length >= 200 && length <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        } 
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getNumberOfCutsFlyers(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkFlyersCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getStateElemFlyers(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            elemField.disabled = false; elemField.value = 1
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateFlyers(); 
    };
}

function getRentabilityFlyers() {
    var printedMachine = document.getElementById("printedMachineFlyers").value;
    var rentability = document.getElementById("rentabilityFlyers"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadeFlyers() {
    var laminade = document.getElementById("laminadeFlyers"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculateFlyers();
}

function getFlyersFormat() {
    var formatFlyers = document.getElementById("formatFlyers");
    formatFlyers.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Flyers"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '1'){
            formatFlyers.options[formatFlyers.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatFlyers.options[formatFlyers.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatFlyers(firstCall) {
    var paperFormat = document.getElementById("paperFormatFlyers"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightFlyers").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineFlyers').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatFlyers = +document.getElementById('formatFlyers').value;
        var printing = Number(document.getElementById('printingFlyers').value);
     

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingFlyers').value);
        var widthFlyers = document.getElementById('widthFlyers');
        var lengthFlyers = document.getElementById('lengthFlyers');
        var allowance = document.getElementById('allowanceFlyers');
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatFlyers != 6){
                        widthFlyers.disabled = true;
                        lengthFlyers.disabled = true;
                        
                        var jsonPFlyers = jsonObj["Paper"]["Flyers"][formatFlyers];
                        width = jsonPFlyers.width;
                        length = jsonPFlyers.length;
                    }
                    else {
                        widthFlyers.disabled = false;
                        lengthFlyers.disabled = false;
                        
                        width = Number(document.getElementById('widthFlyers').value);
                        length = Number(document.getElementById('lengthFlyers').value);
                        
                    }

                    if(allowance.getAttribute("defAllow") == "false" && formatFlyers == 5){
                        allowance.value = 1;
                        allowance.setAttribute("defAllow", true)
                    } else if(allowance.getAttribute("defAllow") == "0" && formatFlyers != 5){
                        allowance.value = 2;
                        allowance.setAttribute("defAllow", 0)
                    } else if(allowance.getAttribute("defAllow") == "true" && formatFlyers != 5){
                        allowance.value = 2;
                        allowance.setAttribute("defAllow", 1)
                    }
                    

                    

                    width +=  (+allowance.value * 2) // прибавляем припуски
                    length += (+allowance.value * 2)

                    if (width == length || width >= 200 && width <= 220 && length >= 200 && length <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length || width >= 200 && width <= 220 && length >= 200 && length <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;                                  
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });

                                
                                if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";


                                

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }

    
    
    getPrintedMachineFlyers();
    

}

function numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatFlyers = +document.getElementById('formatFlyers').value;
    var allowance = Number(document.getElementById('allowanceFlyers').value);
    var width = 0;
    var length = 0;

    if(formatFlyers != 6){
        
        var jsonPFlyers = jsonObj["Paper"]["Flyers"][formatFlyers];
        width = jsonPFlyers.width;
        length = jsonPFlyers.length;
    }
    else {

        width = Number(document.getElementById('widthFlyers').value);
        length = Number(document.getElementById('lengthFlyers').value);
        
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsFlyers(Math.trunc(numberWidth), Math.trunc(numberLength), allowance)

    return numberProduct
}

function getPaperWeightFlyers() {
    var paperWeight = document.getElementById("paperWeightFlyers");
    var face = Number(document.getElementById('faceFlyers').value);
    var turnover = Number(document.getElementById('turnoverFlyers').value);
    var paperWeightValue = document.getElementById("paperWeightFlyers").value; //получаем value выбранного элемента option по ID элемента select 
    var paperTypeFlyers = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperWeightFlyers = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем тип бумаги

    if( paperWeight.options.length == 0 ) {
        
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonAdhesive = jsonObj["Paper"]["Adhesive"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonAdhesive, paperWeight, "Adhesive");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                
                if(face == 1 && turnover == 1){
                    if(papetType == "Offset" && elem.id =="1"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                } else {


                    if(papetType == "Glossy" && elem.id =="3"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                }

            });
        }
    }
    
    getPaperFormatFlyers(false);
}

function getNumberOfProductsFlyers() {

    var allowance = document.getElementById('allowanceFlyers').value;
    var paperFormatB = document.getElementById("paperFormatFlyers").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineFlyers").value;
    var labelCheck = document.getElementById('checkFlyersField');
    var printing = Number(document.getElementById('printingFlyers').value);
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var checkLabel = "";
    
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;

        var jsonCPF = jsonObj["Paper"]["Format"];
        
        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
            
            if(elem.id == paperFormatB){
                paperWidth = elem.width;
                paperLength = elem.length;

                paperWidth += (allowance * 2) // прибавляем припуски
                paperLength += (allowance * 2)
    
                widthPrintedArea = (elem.width / 2) - 2; 
                lengthPrintedArea = (elem.length / 2) -2;
                numberOfParts = 4;
            }
        });

        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(elem.id == printedMachine) { // для большей и меньшей стороны{}

                if (widthPrintedArea > lengthPrintedArea){
                    lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                    widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                } else {
                    lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                    widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                }
            }
        });

        checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
        checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
        checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
        checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
        checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";
        

        if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetFlyers(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
        
        labelCheck.innerHTML = checkLabel;

    return numberOfPrintedSheets;
}


function getPrintedMachineFlyers(){
    var printedMachine = document.getElementById("printedMachineFlyers");
    var face = Number(document.getElementById('faceFlyers').value);
    var turnover = Number(document.getElementById('turnoverFlyers').value);
    var pantone = Number(document.getElementById('pantoneFlyers').value); 
    var varnishing = document.getElementById('varnishingFlyers').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightFlyers").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateFlyers();
}
//бланки
var foldersContainer = document.getElementById("foldersContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Папки</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costFolders" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingFolders" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateFolders()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatFolders" name="formatFolders" onchange="getPaperFormatFolders(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'		
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceFolders" class="element text medium" type="number" min="0" oninput="getPaperWeightFolders()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverFolders" class="element text medium" type="number" min="0" oninput="getPaperWeightFolders()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneFolders" class="element text medium" type="number" min="0" oninput="getPrintedMachineFolders()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingFolders" name="varnishingFolders" onchange="getPrintedMachineFolders()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightFolders" name="paperWeightFolders" onchange="getPaperWeightFolders()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatFolders" name="paperFormatFolders" onchange="getPaperFormatFolders()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineFolders" name="printedMachineFolders" onchange="calculateFolders()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityFolders" name="rentabilityFolders" onchange="calculateFolders()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeFolders"  name="laminadeFolders" onchange="getLaminadeFolders()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownFolders" name="cuttingDownFolders" class="col-md-1 checkbox"  type="checkbox" onchange="calculateFolders()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="stampFolders" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemFolders(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="stampFolders" class="element text medium" type="number" min="0" oninput="calculateFolders()"   value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label id="checkFoldersField" class="description"></label>'
html +=                 '<br/><label id="checkFolders" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataFolders" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
foldersContainer.innerHTML = html;     

function Folders() {
    getFoldersFormat();
    getPaperWeightFolders();
    getPrintedMachineFolders();
    getPaperFormatFolders();
    getRentabilityFolders();
    getLaminadeFolders();
    getStateElemFolders(true);
}

function calculateFolders() {
    var finalCostFolders = document.getElementById('final-costFolders');
    var labelCheck = document.getElementById('checkFolders');
    var printing = Number(document.getElementById('printingFolders').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsFolders());
    var printedMachine = document.getElementById("printedMachineFolders");
    var rentabilityId = Number(document.getElementById("rentabilityFolders").value); 
    var turnoverElem = document.getElementById('turnoverFolders');
    var laminade = document.getElementById('laminadeFolders');
    var paperFormat = document.getElementById("paperFormatFolders");
    var cuttingDown = document.getElementById("cuttingDownFolders");
    var varnishing = document.getElementById('varnishingFolders');
    var stamp = document.getElementById('stampFolders');
    var paperWeightValue = document.getElementById("paperWeightFolders"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceFolders').value);
    var turnover = Number(document.getElementById('turnoverFolders').value);
    var pantone = Number(document.getElementById('pantoneFolders').value);
    var techDataFolders = document.getElementById('techDataFolders');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsFolders()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    } else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0
    }
    numberOfForms = (face + turnover + +varnishing.value);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(numberOfPrintedSheets < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }
   
    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Стоимость штампования: " + +stamp.value + "BYN" +  "<br />";
   
    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + (allCost + (+stamp.value / jsonObjDollar)).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " BYN" +  "<br />";
    finalCostFolders.innerHTML = "Цена: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataFolders() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textCuttingDown = "";
        var textStamp = "";
        var numberOfParts = 0;

        getNumberOfPartsFolders() != 6 ? numberOfParts = getNumberOfPartsFolders() + " части " : numberOfParts = getNumberOfPartsFolders() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 
        !stamp.disabled ? textStamp = "да"  : textStamp = "нет"; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=          textVarnishingUV;
        html +=         '<label class="description">Штамп: ' + textStamp + '</label><br/>';
        html +=     '</div> '

        return html;  
    }

    techDataFolders.innerHTML = showTechnicalDataFolders();
}

function getNumberOfPartsFolders() {
    var paperFormat = document.getElementById('paperFormatFolders').value; 
    var formatFolders = +document.getElementById('formatFolders').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    if(formatFolders == 1){
        width = Number(document.getElementById('widthFolders').value);
        length = Number(document.getElementById('lengthFolders').value);
    } else {
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["Folders"][formatFolders];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    } 
    

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getStateElemFolders(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampFolders") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateFolders(); 
    };
}

function getRentabilityFolders() {
    var printedMachine = document.getElementById("printedMachineFolders").value;
    var rentability = document.getElementById("rentabilityFolders"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadeFolders() {
    var laminade = document.getElementById("laminadeFolders"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == "1"){
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
            }
        });
    }
    calculateFolders();
}

function getFoldersFormat() {
    var formatFolders = document.getElementById("formatFolders");
    formatFolders.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Folders"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatFolders.options[formatFolders.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatFolders.options[formatFolders.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatFolders(firstCall) {
    var paperFormat = document.getElementById("paperFormatFolders"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightFolders").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineFolders').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatFolders = +document.getElementById('formatFolders').value;
        var printing = Number(document.getElementById('printingFolders').value);
        var printing = Number(document.getElementById('printingFolders').value);
        var widthFolders = document.getElementById('widthFolders');
        var lengthFolders = document.getElementById('lengthFolders');
        var allowance = Number(document.getElementById('allowanceFolders').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatFolders != 1){
                        widthFolders.disabled = true;
                        lengthFolders.disabled = true;
                        
                        var jsonPFolders = jsonObj["Paper"]["Folders"][formatFolders];
                        width = jsonPFolders.width;
                        length = jsonPFolders.length;
                    }
                    else {
                        widthFolders.disabled = false;
                        lengthFolders.disabled = false;
                        
                        width = Number(document.getElementById('widthFolders').value);
                        length = Number(document.getElementById('lengthFolders').value);
                    }

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineFolders();
}

function numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatFolders = +document.getElementById('formatFolders').value;
    var allowance = Number(document.getElementById('allowanceFolders').value);
    var width = 0;
    var length = 0;

    if(formatFolders != 1){
        var jsonPFolders = jsonObj["Paper"]["Folders"][formatFolders];
        width = jsonPFolders.width;
        length = jsonPFolders.length;
    }
    else {
        width = Number(document.getElementById('widthFolders').value);
        length = Number(document.getElementById('lengthFolders').value);
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    return numberProduct
}

function getPaperWeightFolders() {
    var paperWeight = document.getElementById("paperWeightFolders");
    var face = Number(document.getElementById('faceFolders').value);
    var turnover = Number(document.getElementById('turnoverFolders').value);
    var defcalc = paperWeight.getAttribute("defcalcFolders");
    if( paperWeight.options.length == 0 || face == 4 && turnover == 4 && defcalc == "false") {
        face == 4 && turnover == 4 ? paperWeight.options.length = 0 : "";
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(face == 4 && turnover == 4 && defcalc == "false"){
                    if(papetType == "Carton" && elem.id =="5"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                    htmlObj.setAttribute("defcalcFolders", true)
                } 
                else {
                    if(papetType == "Carton" && elem.id =="2"){
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                    } else {
                        htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                    }
                    htmlObj.setAttribute("defcalcFolders", false)
                }
            });
        } 
    }
    getPaperFormatFolders(false);
}

function getNumberOfProductsFolders() {

    var allowance = document.getElementById('allowanceFolders').value;
    var paperFormatB = document.getElementById("paperFormatFolders").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineFolders").value;
    var labelCheck = document.getElementById('checkFoldersField');
    var printing = Number(document.getElementById('printingFolders').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetFolders(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}


function getPrintedMachineFolders(){
    var printedMachine = document.getElementById("printedMachineFolders");
    var face = Number(document.getElementById('faceFolders').value);
    var turnover = Number(document.getElementById('turnoverFolders').value);
    var pantone = Number(document.getElementById('pantoneFolders').value); 
    var varnishing = document.getElementById('varnishingFolders').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightFolders").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateFolders();
}
//бланки
var magnetsContainer = document.getElementById("magnetsContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Магниты</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costMagnets" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingMagnets" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateMagnets()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatMagnets" name="formatMagnets" onchange="getPaperFormatMagnets(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'		
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceMagnets" class="element text medium" type="number" min="0" oninput="getPaperWeightMagnets()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneMagnets" class="element text medium" type="number" min="0" oninput="getPrintedMachineMagnets()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingMagnets" name="varnishingMagnets" onchange="getPrintedMachineMagnets()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightMagnets" name="paperWeightMagnets" onchange="getPaperWeightMagnets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatMagnets" name="paperFormatMagnets" onchange="getPaperFormatMagnets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineMagnets" name="printedMachineMagnets" onchange="calculateMagnets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityMagnets" name="rentabilityMagnets" onchange="calculateMagnets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeMagnets"  name="laminadeMagnets" onchange="getLaminadeMagnets()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownMagnets" name="cuttingDownMagnets" class="col-md-1 checkbox"  type="checkbox" onchange="calculateMagnets()"><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkMagnetsCuts" ></label>'
html +=                 '<br/><label id="checkMagnetsField" class="description"></label>'
html +=                 '<br/><label id="checkMagnets" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataMagnets" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
magnetsContainer.innerHTML = html;     

function Magnets() {
    getMagnetsFormat();
    getPaperWeightMagnets();
    getPrintedMachineMagnets();
    getPaperFormatMagnets();
    getRentabilityMagnets();
    getLaminadeMagnets();
    getStateElemMagnets(true);
}

function calculateMagnets() {
    var finalCostMagnets = document.getElementById('final-costMagnets');
    var labelCheck = document.getElementById('checkMagnets');
    var printing = Number(document.getElementById('printingMagnets').value);
    var paperFormat = document.getElementById("paperFormatMagnets");
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsMagnets());
    var cut = Number(document.getElementById('checkMagnetsCuts').textContent);
    var numberOfPrintedVinylSheets = numberOfPrintedSheets;
    var printedMachine = document.getElementById("printedMachineMagnets");
    var rentabilityId = Number(document.getElementById("rentabilityMagnets").value); 
    var laminade = document.getElementById('laminadeMagnets');
    var varnishing = document.getElementById('varnishingMagnets');
    var paperWeightValue = document.getElementById("paperWeightMagnets"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceMagnets').value);
    var techDataMagnets = document.getElementById('techDataMagnets');
    
    var pantone = Number(document.getElementById('pantoneMagnets').value);
    var cuttingDown = document.getElementById("cuttingDownMagnets");
    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonMV = jsonObj["Paper"]["MagneticVinyl"][0]
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];

    rentabilityPrice = jsonPMR.price;
    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var checkLabel = "";
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var pasting = 1;
    var turnover = 0;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsMagnets()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    checkLabel += "Количество листов винила: " + numberOfPrintedVinylSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";

    

    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    } else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0
        
    }
    numberOfForms = (face + turnover + +varnishing.value);


    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";

    var magneticVinylCost = numberOfPrintedVinylSheets * jsonMV.price;
    checkLabel +="Стоимость магнитного винила: " + magneticVinylCost.toFixed(2) + "$" +  "<br />";

    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost + magneticVinylCost;

    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(numberOfPrintedVinylSheets < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";
    
    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    var jsonPast = jsonObj["Pasting"][pasting];
    allCost += (numberOfPrintedSheets * jsonPast.price );
    checkLabel +="Стоимость кашировки: " + (numberOfPrintedSheets * jsonPast.price ).toFixed(2) + "$" +  "<br />";


    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostMagnets.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed()+ " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataMagnets() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var numberOfParts = 0;
        var textCuttingDown = "";

        getNumberOfPartsMagnets() != 6 ? numberOfParts = getNumberOfPartsMagnets() + " части " : numberOfParts = getNumberOfPartsMagnets() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 

        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=         '<label class="description">Кашировка: да</label><br/>'; 
        html +=          textVarnishingUV;
        html +=     '</div> '

        return html;  
    }

    techDataMagnets.innerHTML = showTechnicalDataMagnets();
}

function getNumberOfPartsMagnets() {
    var paperFormat = document.getElementById('paperFormatMagnets').value; 
    var formatMagnets = +document.getElementById('formatMagnets').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    
    if(formatMagnets == 3){
        width = Number(document.getElementById('widthMagnets').value);
        length = Number(document.getElementById('lengthMagnets').value);
    } else {
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["Magnets"][formatMagnets];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    } 
    

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getNumberOfCutsMagnets(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkMagnetsCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getStateElemMagnets(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampMagnets") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateMagnets(); 
    };
}

function getLaminadeMagnets() {
    var laminade = document.getElementById("laminadeMagnets"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == "0" || elem.id == "1" || elem.id == "3" || elem.id == "5")
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculateMagnets();
}

function getRentabilityMagnets() {
    var printedMachine = document.getElementById("printedMachineMagnets").value;
    var rentability = document.getElementById("rentabilityMagnets"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}


function getMagnetsFormat() {
    var formatMagnets = document.getElementById("formatMagnets");
    formatMagnets.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Magnets"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatMagnets.options[formatMagnets.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatMagnets.options[formatMagnets.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatMagnets(firstCall) {
    var paperFormat = document.getElementById("paperFormatMagnets"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightMagnets").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineMagnets').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatMagnets = +document.getElementById('formatMagnets').value;
        var printing = Number(document.getElementById('printingMagnets').value);
     

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingMagnets').value);
        var widthMagnets = document.getElementById('widthMagnets');
        var lengthMagnets = document.getElementById('lengthMagnets');
        var allowance = Number(document.getElementById('allowanceMagnets').value);
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatMagnets != 3){
                        widthMagnets.disabled = true;
                        lengthMagnets.disabled = true;
                        
                        var jsonPMagnets = jsonObj["Paper"]["Magnets"][formatMagnets];
                        width = jsonPMagnets.width;
                        length = jsonPMagnets.length;
                    }
                    else {
                        widthMagnets.disabled = false;
                        lengthMagnets.disabled = false;   
                    }

                    if(elem.id == "5" ){ 
                        paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                    }
             
                }
            });
        });
    }
    
    getPrintedMachineMagnets();  

}



function numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatMagnets = +document.getElementById('formatMagnets').value;
    var allowance = Number(document.getElementById('allowanceMagnets').value);
    var width = 0;
    var length = 0;

    if(formatMagnets != 3){
        
        var jsonPMagnets = jsonObj["Paper"]["Magnets"][formatMagnets];
        width = jsonPMagnets.width;
        length = jsonPMagnets.length;
    }
    else {

        width = Number(document.getElementById('widthMagnets').value);
        length = Number(document.getElementById('lengthMagnets').value);
        
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsMagnets(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function getPaperWeightMagnets() {
    var paperWeight = document.getElementById("paperWeightMagnets");
    if (paperWeight.options.length == 0){
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                if(elem.id == "5"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } 
            });
        }
    }

    getPaperFormatMagnets(false);
}

function getNumberOfProductsMagnets() {

    var allowance = document.getElementById('allowanceMagnets').value;
    var paperFormat = document.getElementById("paperFormatMagnets").value;
    var printedMachine = document.getElementById("printedMachineMagnets").value;
    var labelCheck = document.getElementById('checkMagnetsField');
    
    var printing = Number(document.getElementById('printingMagnets').value);
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var checkLabel = "";
    
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;

        var jsonCPF = jsonObj["Paper"]["Format"];
        
        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
            
            if(elem.id == paperFormat){
                paperWidth = elem.width;
                paperLength = elem.length;

                paperWidth += (allowance * 2) // прибавляем припуски
                paperLength += (allowance * 2)
    
                widthPrintedArea = (elem.width / 2) - 2; 
                lengthPrintedArea = (elem.length / 2) - 10;
                numberOfParts = 4;
            }
        });

        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(elem.id == printedMachine) { // для большей и меньшей стороны{}

                if (widthPrintedArea > lengthPrintedArea){
                    lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                    widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                } else {
                    lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                    widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                }
            }
        });

        checkLabel += "Режем на " + numberOfParts +" части" + "<br />";
        checkLabel += "Размер запечатываемого поля: " + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
        checkLabel +="Количество изделий на листе при расположении в ширину: " + numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
        checkLabel +="Печатных листов при расположении в ширину: " + Math.ceil(printing / numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
        checkLabel +="Количество изделий на листе при расположении в длинну: " + numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
        checkLabel +="Печатных листов при расположении в длинну: " + Math.ceil(printing / numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";

        if(numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetMagnets(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
        
        labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}


function getPrintedMachineMagnets(){
    var printedMachine = document.getElementById("printedMachineMagnets");
    var face = Number(document.getElementById('faceMagnets').value);
    var turnover = 0;
    var pantone = Number(document.getElementById('pantoneMagnets').value); 
    var varnishing = document.getElementById('varnishingMagnets').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightMagnets").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateMagnets();
}
//бланки
var packagesContainer = document.getElementById("packagesContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Пакеты</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costPackages" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingPackages" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePackages()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatPackages" name="formatPackages" onchange="calculatePackages()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Тип пакета</label>'			
html +=             '<div>'
html +=                 '<select id="typePackages" name="typePackages" onchange="calculatePackages()">'
html +=                     '<option value="0">Односторонний</option>'
html +=                     '<option value="1">Двухсторонний</option>'
html +=                     '<option value="2">Разные 2 стороны</option>'
html +=                 '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Красочность</label>'			
html +=             '<div>'
html +=                 '<select id="colorfulnessPackages" name="colorfulnessPackages" onchange="getPrintedMachinePackages()">'
html +=                     '<option value="0">Полноцвет + глянцевый ламинат</option>'
html +=                     '<option value="1">Полноцвет + матовый ламинат</option>'
html +=                     '<option value="2">1 пантон + глянцевый ламинат</option>'
html +=                     '<option value="3">1 пантон + матовый ламинат</option>'
html +=                 '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperWeightPackages" name="paperWeightPackages" onchange="getPaperWeightPackages()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachinePackages" name="printedMachinePackages" onchange="calculatePackages()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityPackages" name="rentabilityPackages" onchange="calculatePackages()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-4">'				
html +=                 '<label  class="description">Люверсы</label>'
html +=                 '<div>'
html +=                     '<select id="grommetPackages" name="grommetPackages" onchange="calculatePackages()">'
html +=                         '<option value="0">Нет</option>'
html +=                         '<option value="4">Серебро</option>'
html +=                         '<option value="4">Золото</option>'
html +=                     '</select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkPackagesCuts" ></label></label>'
html +=                 '<br/><label id="checkPackagesField" class="description"></label>'
html +=                 '<br/><label id="checkPackages" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataPackages" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
packagesContainer.innerHTML = html;     

function Packages() {
    getPackagesFormat();
    getPaperWeightPackages();
    getPrintedMachinePackages();
    getRentabilityPackages();
    getStateElemPackages(true);
}

function calculatePackages() {
    var finalCostPackages = document.getElementById('final-costPackages');
    var labelCheck = document.getElementById('checkPackages');
    var printing = Number(document.getElementById('printingPackages').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsPackages());
    var printedMachine = document.getElementById("printedMachinePackages");
    var rentabilityId = Number(document.getElementById("rentabilityPackages").value); 
    var turnoverElem = document.getElementById('turnoverPackages');
    var techDataPackages = document.getElementById('techDataPackages');
    var formatPackages = document.getElementById("formatPackages");
    var cut = Number(document.getElementById('checkPackagesCuts').textContent);
    var paperWeightValue = document.getElementById("paperWeightPackages"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var grommet = document.getElementById('grommetPackages');
    var typePackages = +document.getElementById('typePackages').value;
    var colorfulnessPackages = Number(document.getElementById('colorfulnessPackages').value);

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var paperFormat = 0;
    var face = 0;
    var turnover = 0;
    var pantone = 0;
    var laminade = 0;

    if(formatPackages == 1 || formatPackages == 6 || formatPackages == 7){
        paperFormat = 5;
    }
    else {
        paperFormat = 7;
    }

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

   

    if(colorfulnessPackages == 0){
        face = 4;
        turnover = 0;
        pantone = 0;
        laminade = 1;
    } else if(colorfulnessPackages == 1){
        face = 4;
        turnover = 0;
        pantone = 0;
        laminade = 3;
    } else if(colorfulnessPackages == 2){
        face = 1;
        turnover = 0;
        pantone = 1;
        laminade = 1;
    } else {
        face = 1;
        turnover = 0;
        pantone = 1;
        laminade = 3;
    }
    
    if(formatPackages != 0){
        typePackages == 1 ? numberOfPrintedSheets *= 2 : "";
        typePackages == 2 ? numberOfPrintedSheets *= 2 : "";
    }

    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsPackages()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    numberOfForms = (face + turnover);

    if(formatPackages != 0){
        typePackages == 2 ? numberOfForms *= 2 : "";
    }

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper = 0;

    if(formatPackages != 0){
        typePackages == 0 ? allPaper = Math.ceil(((numberOfPrintedSheets * 2 + allFittingPaper) / numberOfParts)):  allPaper = Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    } else {
        allPaper = Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    }

    
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) ;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";


    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    var jsonG = jsonObj["Gluing"][0];
    var buildPackagePrice = 0;
    
    if(printing > jsonG.BuildPackage[3].after){
        buildPackagePrice = jsonG.BuildPackage[3].price
    } else {
        for(i=0;i<3;i++){
            if(printing <=  jsonG.BuildPackage[i].before) {
            buildPackagePrice = jsonG.BuildPackage[i].price
            break;
            }
        }
    }
    
    allCost += (printing * buildPackagePrice)
    checkLabel +="Стоимость сборки пакетов: " + (printing * buildPackagePrice).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.grommet * +grommet.value);
    checkLabel +="Стоимость люверс: " + (printing * jsonPP.grommet * +grommet.value).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][laminade];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostPackages.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    
    function showTechnicalDataPackages() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var numberOfParts = 0;
        var textGrommet = "";

        getNumberOfPartsPackages() != 6 ? numberOfParts = getNumberOfPartsPackages() + " части " : numberOfParts = getNumberOfPartsPackages() + " частей ";
        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        grommet.value > 0 ? textGrommet = "да"  : textGrommet = "нет"; 
        laminade != 0 && laminade != undefined && laminade != "" ? textLaminade = " / ламинат " + jsonObj["Laminade"][laminade].name : textLaminade = ""; 

        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + jsonObj["Paper"]["Format"][paperFormat].name +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Люверсы: ' + textGrommet + '</label><br/>'; 
        html +=         '<label class="description">Сборка пакетов: да</label><br/>'; 
        html +=     '</div> '

        return html;  
    }

    techDataPackages.innerHTML = showTechnicalDataPackages();
}

function getNumberOfPartsPackages() {
    var paperFormat = 0; 
    var formatPackages = +document.getElementById('formatPackages').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    if(formatPackages == 1 || formatPackages == 6 || formatPackages == 7){
        paperFormat = 5;
    }
    else {
        paperFormat = 7;
    }

    var jsonPPackages = jsonObj["Paper"]["Packages"][formatPackages];
    width = jsonPPackages.width;
    length = jsonPPackages.length;
    
    
    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getNumberOfCutsPackages(numberWidth, numberLength){
    var cuts = document.getElementById('checkPackagesCuts');
    var formatPackages = document.getElementById("formatPackages").value;
    var numberOfCuts = 4;

    
        
        formatPackages == 0 ? numberOfCuts = 6 : numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    
    
    cuts.textContent = numberOfCuts;
}


function getStateElemPackages(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            elemField.disabled = false; elemField.value = 1
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculatePackages(); 
    };
}

function getRentabilityPackages() {
    var printedMachine = document.getElementById("printedMachinePackages").value;
    var rentability = document.getElementById("rentabilityPackages"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadePackages() {
    var laminade = document.getElementById("laminadePackages"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculatePackages();
}

function getPackagesFormat() {
    var formatPackages = document.getElementById("formatPackages");
    formatPackages.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Packages"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatPackages.options[formatPackages.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatPackages.options[formatPackages.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatPackages = +document.getElementById('formatPackages').value;
  
    var width = 0;
    var length = 0;
    var jsonPPackages = jsonObj["Paper"]["Packages"][formatPackages];
    width = jsonPPackages.width;
    length = jsonPPackages.length;
    

    
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsPackages(Math.trunc(numberWidth), Math.trunc(numberLength))

    return numberProduct
}

function getPaperWeightPackages() {
    var paperWeight = document.getElementById("paperWeightPackages");
    var paperWeightValue = document.getElementById("paperWeightPackages").value; //получаем value выбранного элемента option по ID элемента select 
    var paperTypePackages = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperWeightPackages = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем тип бумаги


    if( paperWeight.options.length == 0 ) {
        
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {

                if(papetType == "Glossy" && elem.id =="4"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else if (papetType == "Mat" && elem.id =="4"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }

            });
        }
    }
    
    getPrintedMachinePackages();
}

function getNumberOfProductsPackages() {

    
    var formatPackages = +document.getElementById('formatPackages').value;
    
    var printedMachine = document.getElementById("printedMachinePackages").value;
    var labelCheck = document.getElementById('checkPackagesField');
    var printing = Number(document.getElementById('printingPackages').value);
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var checkLabel = "";
    var paperFormat = 0;

    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
    if(formatPackages == 1 || formatPackages == 6 || formatPackages == 7){
        paperFormat = 5;
    }
    else {
        paperFormat = 7;
    }
    
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormat){
            paperWidth = elem.width;
            paperLength = elem.length;

            

            widthPrintedArea = (elem.width / 2) - 1 
            formatPackages == 3 ? widthPrintedArea = (elem.width / 2) : widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) - 2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(elem.id == printedMachine) { // для большей и меньшей стороны{}

            let flap = 0;
            formatPackages == 3 ? flap = 0 : flap = elem.flap; 

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";
    

    if(numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetPackages(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;

    return numberOfPrintedSheets;
}


function getPrintedMachinePackages(){
    var printedMachine = document.getElementById("printedMachinePackages");
    var colorfulnessPackages = Number(document.getElementById('colorfulnessPackages').value);
    var face = 0;
    var turnover = 0;
    var pantone = 0;

    if(colorfulnessPackages == 0){
        face = 4;
        turnover = 0;
        pantone = 0;
    } else if(colorfulnessPackages == 1){
        face = 4;
        turnover = 0;
        pantone = 0;
    } else if(colorfulnessPackages == 2){
        face = 1;
        turnover = 0;
        pantone = 1;
    } else {
        face = 1;
        turnover = 0;
        pantone = 1;
    }
    

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightPackages").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && pantone == 0){
            if(paperType == "Offset" && varnishing == "NO"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } else if(face == 1 && pantone == 1){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }     
    });
    
    calculatePackages();
}
//бланки
var envelopesContainer = document.getElementById("envelopesContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Конверты почтовые</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costEnvelopes" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingEnvelopes" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateEnvelopes()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatEnvelopes" name="formatEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Красочность</label>'			
html +=             '<div>'
html +=                 '<select id="colorfulnessEnvelopes" name="colorfulnessEnvelopes" onchange="getPrintedMachineEnvelopes()">'
html +=                     '<option value="0">4+0</option>'
html +=                     '<option value="1">2+0</option>'
html +=                     '<option value="2">1+0</option>'
html +=                 '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneEnvelopes" class="element text medium" type="number" min="0" oninput="getPrintedMachineEnvelopes()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'		
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineEnvelopes" name="printedMachineEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityEnvelopes" name="rentabilityEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label id="checkEnvelopesField" class="description"></label>'
html +=                 '<label id="checkEnvelopes" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataEnvelopes" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
envelopesContainer.innerHTML = html;     

function Envelopes() {
    getEnvelopesFormat();
    getPrintedMachineEnvelopes();
    getRentabilityEnvelopes();
}

function calculateEnvelopes() {
    var finalCostEnvelopes = document.getElementById('final-costEnvelopes');
    var labelCheck = document.getElementById('checkEnvelopes');
    var printing = Number(document.getElementById('printingEnvelopes').value);
    var numberOfPrintedSheets = printing;
    var printedMachine = document.getElementById("printedMachineEnvelopes");
    var rentabilityId = Number(document.getElementById("rentabilityEnvelopes").value); 
    var pantone = Number(document.getElementById('pantoneEnvelopes').value);
    var formatEnvelopes = document.getElementById("formatEnvelopes");
    var colorfulnessEnvelopes = Number(document.getElementById('colorfulnessEnvelopes').value);
    var techDataEnvelopes = document.getElementById('techDataEnvelopes');

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var face = 0;
    var turnover = 0;
    var laminade = 0;

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonE = jsonObj["Paper"]["Envelopes"][formatEnvelopes.value];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

   

    if(colorfulnessEnvelopes == 0){
        face = 4;
        turnover = 0;
    } else if(colorfulnessEnvelopes == 1){
        face = 2;
        turnover = 0;
    } else if(colorfulnessEnvelopes == 2){
        face = 1;
        turnover = 0;
    } 

    checkLabel += "Количесвто изделий: " + printing + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    numberOfForms = (face + turnover);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper = Math.ceil((numberOfPrintedSheets + allFittingPaper) );
    
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"
    printSpeedRatio = jsonC.printSpeedRatioEnvelopes;

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";
    
    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) ;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones  + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    var envelopesCost = printing * jsonE.price;
    checkLabel +="Стоимость конвертов: " + envelopesCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + formCost + printingCost + envelopesCost;

    
    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostEnvelopes.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataEnvelopes() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textCuttingDown = "";
        var textStamp = "";
        var textScotchEnvelopes = "";

        pantone.value != 0 && pantone.value != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: ** конверт: ' + formatEnvelopes.options[formatEnvelopes.selectedIndex].text +  " / " + allPaper + " л." + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'

        return html;  
    }

    techDataEnvelopes.innerHTML = showTechnicalDataEnvelopes();
}


function getRentabilityEnvelopes() {
    var printedMachine = document.getElementById("printedMachineEnvelopes").value;
    var rentability = document.getElementById("rentabilityEnvelopes"); //получаем элемент зфтещтупо его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}


function getEnvelopesFormat() {
    var formatEnvelopes = document.getElementById("formatEnvelopes");
    formatEnvelopes.options.length = 0;

    var jsonE = jsonObj["Paper"]["Envelopes"];
    jsonE.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatEnvelopes.options[formatEnvelopes.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatEnvelopes.options[formatEnvelopes.options.length] = new Option(elem.name, elem.id);
        }   
    });
}







function getPrintedMachineEnvelopes(){
    var printedMachine = document.getElementById("printedMachineEnvelopes");
    var colorfulnessPackages = Number(document.getElementById('colorfulnessEnvelopes').value);
    var face = 0;
    var turnover = 0;
 

    if(colorfulnessPackages == 0){
        face = 4;
        turnover = 0;
    } else if(colorfulnessPackages == 1){
        face = 2;
        turnover = 0;
    }  else {
        face = 1;
        turnover = 0;
    }
    

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightPackages").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(elem.id != "2"){
            if(face > 2){
                if(elem.id == '0'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else if(face == 2){
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } 
            else {
                if(elem.id == '1'){
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }  
                else{
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                } 
            }   
        }    
    });
    
    
    calculateEnvelopes();
}
//бланки
var stickersContainer = document.getElementById("stickersContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Наклейки</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costStickers" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingStickers" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateStickers()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatStickers" name="formatStickers" onchange="getPaperFormatStickers(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthStickers" class="element text medium" type="number" min="0" oninput="getPaperFormatStickers(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthStickers" class="element text medium" type="number" min="0" oninput="getPaperFormatStickers(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceStickers" class="element text medium" type="number" min="0" oninput="getPaperFormatStickers(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceStickers" class="element text medium" type="number" min="0" oninput="getPaperWeightStickers()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneStickers" class="element text medium" type="number" min="0" oninput="getPrintedMachineStickers()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3 extremum-slide padding-none">'
html +=             '<div class="col-md-12"><br/><br/></div>'
html +=             '<div class="col-md-12">'				
html +=                 '<label><input  id="fullImprint"  name="fullImprint" class="col-md-1 checkbox"  type="checkbox" onchange="getPaperFormatStickers(false)"><span>Плотная запечатка</span></label>'
html +=             '</div>'
html +=         '</div> '	
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-5">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightStickers" name="paperWeightStickers" onchange="getPaperWeightStickers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatStickers" name="paperFormatStickers" onchange="getPaperFormatStickers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineStickers" name="printedMachineStickers" onchange="calculateStickers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityStickers" name="rentabilityStickers" onchange="calculateStickers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeStickers"  name="laminadeStickers" onchange="getLaminadeStickers()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="cuttingStickers" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemStickers(this)"><span>Надрезка за рез, м</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="cuttingStickers" class="element text medium" step="0.1" type="number" min="0" oninput="calculateStickers()" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkStickersCuts" ></label></label>'
html +=                 '<br/><label id="checkStickersField" class="description"></label>'
html +=                 '<br/><label id="checkStickers" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataStickers" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
stickersContainer.innerHTML = html;     

function Stickers() {
    getStickersFormat();
    getPaperWeightStickers();
    getPrintedMachineStickers();
    getRentabilityStickers();
    getLaminadeStickers();
    getPaperFormatStickers(false);
    getStateElemStickers(true);
}

function calculateStickers() {
    var finalCostStickers = document.getElementById('final-costStickers');
    var labelCheck = document.getElementById('checkStickers');
    var printing = Number(document.getElementById('printingStickers').value);
    var paperFormat = document.getElementById("paperFormatStickers");
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsStickers());
    var cut = Number(document.getElementById('checkStickersCuts').textContent);
    var numberOfPrintedVinylSheets = numberOfPrintedSheets;
    var printedMachine = document.getElementById("printedMachineStickers");
    var rentabilityId = Number(document.getElementById("rentabilityStickers").value); 
    var laminade = document.getElementById('laminadeStickers');
    var paperWeightValue = document.getElementById("paperWeightStickers"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId] ; 
    var face = Number(document.getElementById('faceStickers').value);
    var turnover = 0;
    var pantone = Number(document.getElementById('pantoneStickers').value);
    var cutting = document.getElementById('cuttingStickers');
    var techDataStickers = document.getElementById('techDataStickers');
    
    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];

    rentabilityPrice = jsonPMR.price;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var checkLabel = "";
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var pasting = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsStickers()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    checkLabel += "Количество листов винила: " + numberOfPrintedVinylSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";

    

    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost != 0){
        if(cutCost < jsonC.minCutPrice){
            cutCost = jsonC.minCutPrice;
        }
    }
    
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    numberOfForms = (face + turnover);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";

    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    if(paperType == "Adhesive"){
        var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
        checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";
        var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper
        checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";
    } else {
        var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper));
        checkLabel +="Всего плёнки на тираж: " + allPaper + "<br />";
        var paperWeight = allPaper;
        checkLabel +="Количество листов плёнки: " + paperWeight.toFixed(2) + "<br />";
    }

    

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";


    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections);

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    if(paperType == "Adhesive"){
        checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";
        var paperCost = paperWeight * jsonP.price  ;
        checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    } else {

        checkLabel +="Cтоимость за лист: " + (jsonP.price / jsonObjDollar).toFixed(2) + "<br />";
        var paperCost = paperWeight * (jsonP.price / jsonObjDollar).toFixed(2)  ;
        checkLabel +="Стоимость плёнки: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    }

    
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += (printing * jsonPP.cutting * +cutting.value);
    checkLabel +="Стоимость Надрезки: " + (numberOfPrintedSheets * jsonPP.cutting * +cutting.value).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";


    checkLabel +="Общая стоимость: " + allCost.toFixed() + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed() + " BYN" +  "<br />";
    finalCostStickers.innerHTML = "Цена: " + (allCost.toFixed(1) * (jsonObjDollar* jsonC.dollarCoeff)).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    
    function showTechnicalDataStickers() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var numberOfParts = 0;
        var textCutting = "";

        getNumberOfPartsStickers() != 6 ? numberOfParts = getNumberOfPartsStickers() + " части " : numberOfParts = getNumberOfPartsStickers() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        !cutting.disabled ? textCutting = "да"  : textCutting = "нет"; 

        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=          textVarnishingUV;
        html +=         '<label class="description">Надрезка: ' + textCutting + '</label><br/>'; 
        html +=     '</div> '

        return html;  
    }

    techDataStickers.innerHTML = showTechnicalDataStickers();
}

function getNumberOfPartsStickers() {
    var paperFormat = document.getElementById('paperFormatStickers').value; 
    var formatStickers = +document.getElementById('formatStickers').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    
    if(formatStickers == 5 || formatStickers == 6){
        width = Number(document.getElementById('widthStickers').value);
        length = Number(document.getElementById('lengthStickers').value);
    } else {
        var jsonPStickers = jsonObj["Paper"]["Stickers"][formatStickers];
        width = jsonPStickers.width;
        length = jsonPStickers.length;
    } 
    

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getNumberOfCutsStickers(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkStickersCuts');
    var formatStickers = document.getElementById("formatStickers");
    var numberOfCuts = 4;

    if(formatStickers.value != 5){
        if(allowance==0){
            numberOfCuts += (numberWidth - 1) + (numberLength - 1);
        }
        else {
            numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
        }
        
        cuts.textContent = numberOfCuts;
    }
    else {
        cuts.textContent = 0;
    }

    
}

function getLaminadeStickers() {
    var laminade = document.getElementById("laminadeStickers"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == "0" || elem.id == "1" || elem.id == "3" || elem.id == "5")
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculateStickers();
}

function getStateElemStickers(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "cuttingSticers") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 0;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateStickers(); 
    };
}

function getRentabilityStickers() {
    var printedMachine = document.getElementById("printedMachineStickers").value;
    var rentability = document.getElementById("rentabilityStickers"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}


function getStickersFormat() {
    var formatStickers = document.getElementById("formatStickers");
    formatStickers.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Stickers"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatStickers.options[formatStickers.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatStickers.options[formatStickers.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatStickers(firstCall) {
    var paperFormat = document.getElementById("paperFormatStickers"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightStickers").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineStickers').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatStickers = +document.getElementById('formatStickers').value;
        var printing = Number(document.getElementById('printingStickers').value);
        var widthStickers = document.getElementById('widthStickers');
        var fullImprint = document.getElementById('fullImprint');
        var lengthStickers = document.getElementById('lengthStickers');
        var allowance = Number(document.getElementById('allowanceStickers').value);
        var cutting = document.getElementById('cuttingStickers');
        var cuttingCheckbox = document.querySelector('input[name=cuttingStickers]');

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatStickers == 5 || formatStickers == 6){
                        widthStickers.disabled = false;
                        lengthStickers.disabled = false;

                        if(formatStickers == 5){
                            cutting.disabled = false;
                            cuttingCheckbox.checked = true;
                            fullImprint.disabled = false;
                        } else {
                            cutting.disabled = true;
                            cuttingCheckbox.checked = false;
                            
                        }
                        
                        width = Number(document.getElementById('widthStickers').value);
                        length = Number(document.getElementById('lengthStickers').value);
                    }
                    else {

                        if(formatStickers != 5){
                            cutting.disabled = true;
                            cuttingCheckbox.checked = false;
                            fullImprint.disabled = true;
                        }

                        widthStickers.disabled = true;
                        lengthStickers.disabled = true;
                        
                        var jsonPStickers = jsonObj["Paper"]["Stickers"][formatStickers];
                        width = jsonPStickers.width;
                        length = jsonPStickers.length;
                        
                    }

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)
                    
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1" || elem.id == "10"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else {
                                    widthPrintedArea = (elem.width) - 2; 
                                    lengthPrintedArea = (elem.length) -2;
                                }
                                fullImprint.checked == true ? fullImprint = 1 : fullImprint = 0;
                                var jsonPM = jsonObj["PrintingMachine"];
                                var jsonPL = jsonObj["Plotter"];
                                if (formatStickers == "5"){
                                    jsonPL.forEach(function(elem) {
                                        if(elem.id == fullImprint) { // для большей и меньшей стороны{}
                                            if (widthPrintedArea > lengthPrintedArea){
                                                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                            } else {
                                                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                            }
                                        }
                                    });

                                } else {
                                    jsonPM.forEach(function(elem) {
                                        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                            if (widthPrintedArea > lengthPrintedArea){
                                                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                            } else {
                                                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                            }
                                        }
                                    });
                                }
                                
                                
                                if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    
                }
            });
        });
    }
    getPrintedMachineStickers();
}



function numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatStickers = +document.getElementById('formatStickers').value;
    var allowance = Number(document.getElementById('allowanceStickers').value);
    var width = 0;
    var length = 0;

    if(formatStickers == 5 || formatStickers == 6){
        width = Number(document.getElementById('widthStickers').value);
        length = Number(document.getElementById('lengthStickers').value);
        
    }
    else {
        var jsonPStickers = jsonObj["Paper"]["Stickers"][formatStickers];
        width = jsonPStickers.width;
        length = jsonPStickers.length;

    }

    width +=  (allowance * 2); // прибавляем припуски
    length += (allowance * 2);
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsStickers(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function getPaperWeightStickers() {
    var paperWeight = document.getElementById("paperWeightStickers");
    if (paperWeight.options.length == 0){
        var jsonAdhesive = jsonObj["Paper"]["Adhesive"];
        var jsonAdhesiveTape = jsonObj["Paper"]["AdhesiveTape"];
        getTypePaper(jsonAdhesive, paperWeight, "Adhesive");
        getTypePaper(jsonAdhesiveTape, paperWeight, "AdhesiveTape");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                if(papetType == "Adhesive" && elem.id =="0"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                } 
            });
        }
    }

    getPaperFormatStickers(false);
}

function getNumberOfProductsStickers() {

    var allowance = +document.getElementById('allowanceStickers').value;
    var paperFormat = document.getElementById("paperFormatStickers").value;
    var printedMachine = document.getElementById("printedMachineStickers").value;
    var labelCheck = document.getElementById('checkStickersField');
    var formatStickers = +document.getElementById('formatStickers').value;
    var printing = Number(document.getElementById('printingStickers').value);
    var fullImprint = document.getElementById('fullImprint');

    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    fullImprint.checked == true ? fullImprint = 1 : fullImprint = 0;

        var jsonCPF = jsonObj["Paper"]["Format"];
        
        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
            
            if(elem.id == paperFormat){
                paperWidth = elem.width;
                paperLength = elem.length;

                paperWidth += (allowance * 2) // прибавляем припуски
                paperLength += (allowance * 2)

                if(elem.id == "0" || elem.id == "1" || elem.id == "10"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                    widthPrintedArea = elem.width - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    numberOfParts = 2;
                } else {
                    widthPrintedArea = elem.width - 2; 
                    lengthPrintedArea = elem.length -2;
                    numberOfParts = 0;
                }
                
            }
        });

        var jsonPM = jsonObj["PrintingMachine"];
        var jsonPL = jsonObj["Plotter"];
        if (formatStickers == 5){
            jsonPL.forEach(function(elem) {
                if(elem.id == fullImprint) { // для большей и меньшей стороны{}
                    if (widthPrintedArea > lengthPrintedArea){
                        lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                        widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                    } else {
                        lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                        widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                    }
                }
            });

        } else {
            jsonPM.forEach(function(elem) {
                if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                    if (widthPrintedArea > lengthPrintedArea){
                        lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                        widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                    } else {
                        lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                        widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                    }
                }
            });
        }

        checkLabel += "Режем на " + numberOfParts +" части" + "<br />";
        checkLabel += "Размер запечатываемого поля: " + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
        checkLabel +="Количество изделий на листе при расположении в ширину: " + numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
        checkLabel +="Печатных листов при расположении в ширину: " + Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
        checkLabel +="Количество изделий на листе при расположении в длинну: " + numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
        checkLabel +="Печатных листов при расположении в длинну: " + Math.ceil(printing / numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";

        if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetStickers(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
    
        labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}


function getPrintedMachineStickers(){
    var printedMachine = document.getElementById("printedMachineStickers");
    var face = Number(document.getElementById('faceStickers').value);
    var turnover = 0;
    var pantone = Number(document.getElementById('pantoneStickers').value); 

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightStickers").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(elem.id != "2"){
            if(face > 2){
                if(elem.id == '0'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else if(face == 2){
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } 
            else {
                if(elem.id == '1'){
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }  
                else{
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                } 
            }   
        }        
    });
    
    calculateStickers();
}


var jsonObj = "";
var requestURL = 'https://medisont.github.io/data/variables.json';
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        request.onload = function() { 
            jsonObj = request.response; 
            
            getPaperWeight();
            getPrintedMachine();
            getPaperFormat(false);   
            getRentability();
            getStateElem(true);
            getLaminade();
            getPasting();
            
            getSpring();
            getThermalCover();
            Bierdequels();
            Booklets();
            Blanks();
            Flyers();
            Folders();
            Magnets();
            Packages();
            Envelopes();
            CuttingEnvelopes();
            Stickers();
            Wobblers();
            BBMC();
        }
    }
}
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

var jsonObjDollar = "";
var requestURLDollar = 'https://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2';
var request1 = new XMLHttpRequest();
var numberOfPS = 0;

request1.onreadystatechange = function() {
    if (request1.status == 200) {
        request1.onload = function() { 
            jsonObjDollar = request1.response.Cur_OfficialRate; 
            calculatePrintedField();
            calculateBierdequels();
            calculateBlanks(); 
            calculateBooklets();
            calculateFlyers(); 
            calculateFolders(); 
            calculateMagnets(); 
            calculatePackages();
            calculateEnvelopes();
            calculateCuttingEnvelopes();
            calculateStickers();
            calculateWobblers();
            fullCalculateBBMC();
        }
    }
}
request1.open('GET', requestURLDollar, true);
request1.responseType = 'json';
request1.send();

//универсальный калькулятор
var homeContainer = document.getElementById("homeContainer");
var html = '<div class="row">'
html +=         '<div class="col-md-12">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Универсальный калькулятор</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-cost" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printing" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="width" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="length" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowance" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Монтажей, шт </label>'
html +=             '<div>'
html +=                 '<input id="montage" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()" maxlength="255" value="1" step="0.5"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Резов на лист</label>'
html +=             '<div>'
html +=                 '<input id="cut" class="element text medium" type="number" min="0" oninput="setFlagOnInput()" flag="false" maxlength="255" /> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'			
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="face" class="element text medium" type="number" min="0" oninput="getPrintedMachine()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnover" class="element text medium" type="number" min="0" oninput="getPrintedMachine()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantone" class="element text medium" type="number" min="0" oninput="getPrintedMachine()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishing" name="varnishing" onchange="getPrintedMachine()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description ">Оборот</label>'
html +=             '<div class="col-md-12 radio">'
html +=                 '<label class="col-md-6"><input name="rev" class="col-md-3 checkbox" id="anotherRev" type="radio" value="1" onchange="calculatePrintedField()" checked="checked"><span class="col-md-9">Чужой</span></label>'
html +=                 '<label class="col-md-6"><input name="rev" class="col-md-3 checkbox" id="ownRev" type="radio" value="2" onchange="calculatePrintedField()" > <span class="col-md-9">Свой</span></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'
html +=             '<label  class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeight" name="paperWeight" onchange="getPaperWeight()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label  class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormat" name="paperFormat" onchange="getPaperFormat()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label  class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachine" name="printedMachine" onchange="calculatePrintedField()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label  class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentability" name="rentability" onchange="getRentability()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide ">'
html +=             '<div class="col-md-3">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminade"  name="laminade" onchange="getLaminade()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-2">'				
html +=                 '<label class="description">Термопереплёт</label>'
html +=                 '<div>'
html +=                     '<select id="thermalCover" name="thermalCover" onchange="getThermalCover()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-2">'				
html +=                 '<label class="description">Кашировка</label>'
html +=                 '<div>'
html +=                     '<select id="pasting" name="pasting" onchange="getPasting()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-5 padding-none">'	
html +=                 '<label class="col-md-12">Пружина</label>'			
html +=                 '<div class="col-md-6">'
html +=                     '<select style="margin:0px;" id="spring" name="spring" onchange="getSpring()"></select>'
html +=                 '</div> '
html +=                 '<div class="col-md-6">'
html +=                     '<input id="springNumber" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'	
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                    '<label><input name="scoring" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span class="col-md-11" >Биговка</span> </label>'
html +=               '</div>'
html +=               '<div class="col-md-1 padding-none">'
html +=                   '<input id="scoring" class=" element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="insertSheetsInBlock" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"> <span>Вставка листов в блок, шт</span></label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="insertSheetsInBlock" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="cuttingDown" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Вырубка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="cuttingDown" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="stamp" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="stamp" class="element text medium" step=0.1 type="number" min="0" oninput="calculatePrintedField()"  max="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="numiration" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Количество нумераций</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="numiration" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=                '<div class="col-md-4">'				
html +=                    '<label><input name="grommet" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Люверс</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="grommet" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=              '</div> '
html +=            '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="cutting" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Надрезка за рез, м</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="cutting" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=              '<div class="col-md-4">'				
html +=                   '<label><input name="hole" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span class="col-md-11">Отверстие</span> </label>'
html +=               '</div>'
html +=              '<div class="col-md-1 padding-none">'
html +=                   '<input id="hole" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                    '<label><input name="compilation" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Подборка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="compilation" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input id="buildPackage" class="col-md-1 checkbox"  type="checkbox" onchange="calculatePrintedField()"><span>Сборка пакетов</span> </label>'
html +=                 '</div>'
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="gluingPVA" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Склейка ПВА</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="gluingPVA" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="glueGun" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Склейка пистолет, точек</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="glueGun" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="scotch" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Cклейка скотч, см</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="scotch" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                     '<label><input name="brace" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Скобы</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="brace" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=              '<div class="col-md-4">'				
html +=                  '<label><input name="rounding" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Скругление</span> </label>'
html +=              '</div>'
html +=              '<div class="col-md-1 padding-none">'
html +=                     '<input id="rounding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-4">'				
html +=                   '<label><input name="folding" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Фальцовка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-1 padding-none">'
html +=                     '<input id="folding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '

html +=         '</div>'
html +=     '</div>'
html += '</div>'
html +=         '<div class="col-md-12">'	
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide padding-none">'
html +=                 '<label id="check" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techData" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html +=     '</div>'

homeContainer.innerHTML = html;     


var numInput = document.querySelectorAll('input');

// Listen for input event on numInput.
numInput.forEach(function(elem) {
    elem.addEventListener('input', function(){
        if(elem.hasAttribute('step')){
            var num = this.value.match(/^[0-9]+*([,.][0-9]+*)?$/);
            if (num === null) {
                // If we have no match, value will be empty.
                this.value = "";
            }
        } else {
            var num = this.value.match(/^\d+$/);
            if (num === null) {
                // If we have no match, value will be empty.
                this.value = "";
            }
        }
        // Let match only digits.
    }, false)
});

function setFlagOnInput(){
    
    var cut = document.getElementById('cut');
    cut.setAttribute("flag", true);
    calculatePrintedField();
}


function calculatePrintedField() {
    var labelCheck = document.getElementById('check');
    var finalCost = document.getElementById('final-cost');
    var printing = Number(document.getElementById('printing').value);
    var paperFormat = document.getElementById('paperFormat'); 
    var printedMachine = document.getElementById('printedMachine');
    var width = Number(document.getElementById('width').value);
    var length = Number(document.getElementById('length').value);
    var allowance = Number(document.getElementById('allowance').value);
    var cut = Number(document.getElementById('cut').value);
    var face = Number(document.getElementById('face').value);
    var turnover = Number(document.getElementById('turnover').value);
    var turnoverElem = document.getElementById('turnover');
    var pantone = Number(document.getElementById('pantone').value);
    var varnishing = document.getElementById('varnishing');
    var rev = document.querySelector('input[name=rev]:checked').value;
    var thermalCover = document.getElementById('thermalCover');
    var gluingPVA = document.getElementById("gluingPVA"); 
    var rentabilityId = Number(document.getElementById("rentability").value); 
    var cuttingDown = document.querySelector('input[name=cuttingDown]');
    var cuttingDownVal = Number(document.getElementById('cuttingDown').value);
    var montage = Number(document.getElementById('montage').value);
    var scoring = document.getElementById('scoring');
    var numiration = document.getElementById('numiration');
    var hole = document.getElementById('hole');
    var insertSheetsInBlock = document.getElementById('insertSheetsInBlock');
    var grommet = document.getElementById('grommet');
    var rounding = document.getElementById('rounding');
    var compilation = document.getElementById('compilation');
    var brace = document.getElementById('brace');
    var folding = document.getElementById('folding');
    var laminade = document.getElementById('laminade');
    var cutting = document.getElementById('cutting');
    var pasting = document.getElementById("pasting");
    var buildPackage = document.getElementById('buildPackage');
    var spring = Number(document.getElementById('spring').value);
    var stamp = document.getElementById('stamp');
    var glueGun = document.getElementById('glueGun');
    var scotch = document.getElementById('scotch');
    var springNumber = Number(document.getElementById('springNumber').value);
    var paperWeightValue = document.getElementById("paperWeight"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
    var techData = document.getElementById('techData');

    var timeOfOnePantone = 0; 
    var chemistryPrice = 0;
    var printSpeed = 0;
    var ream = 0;
    var cutPrice = 0;
    var formPrice = 0;
    var fittingTime = 0;
    var rentabilityPrice = 0;
    var numberOfPrintedSheets = 0;
    var numberOfParts = 0;
    var paperWidth = 0;
    var paperLength = 0;
    var numberOfForms = 0;
    var paperPrice = 0;
    var numberOfSections = 0;
    var paperChargingTime = 0;
    var printSpeedRatio = 1;
    var cuttingDownCost = 0;
    var varnishingCost = 0;
    var coefficientIfSmallPrinting = 0;
    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    var numberOfFittingPaper = 0;
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;
    var checkLabel = "";
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCPF = jsonObj["Paper"]["Format"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormat.value){
            paperWidth = elem.width;
            paperLength = elem.length;

            if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                widthPrintedArea = elem.width - 2; 
                lengthPrintedArea = (elem.length / 2) -2;
                checkLabel += "Режем на 2 части <br />";
                numberOfParts = 2;
            } else if (elem.id == "7"){
                if (width == length && width >= 165 && width <= 220){
                    widthPrintedArea = (elem.width / 3) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 6 части<br />";
                    numberOfParts = 6;
                } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
                    widthPrintedArea = (elem.width / 3) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 6 части<br />";
                    numberOfParts = 6;
                } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
                    widthPrintedArea = (elem.width / 3) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 6 части<br />";
                    numberOfParts = 6;
                }
                else {
                    widthPrintedArea = (elem.width / 2) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 4 части<br />";
                    numberOfParts = 4;
                }
            } else {
                widthPrintedArea = (elem.width / 2) - 2; 
                lengthPrintedArea = (elem.length / 2) -2;
                checkLabel += "Режем на 4 части<br />";
                numberOfParts = 4;
            }
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(elem.id == printedMachine.value) { // для большей и меньшей стороны{}
            chemistryPrice = elem.chemistryPrice;
            printSpeed = elem.printSpeed;
            ream = elem.ream;
            cutPrice = elem.cutPrice;
            formPrice = elem.formPrice;
            fittingTime = elem.fittingTime;
            timeOfOnePantone = elem.timeOfOnePantone;
            numberOfSections = elem.numberOfSections;
            paperChargingTime = elem.paperChargingTime;
            coefficientIfSmallPrinting = elem.coefficientIfSmallPrinting;

            if(jsonP.weight >= 300 || paperType == "Carton"){
                printSpeedRatio = elem.printSpeedRatio;
            }

            var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"][rentabilityId];
            rentabilityPrice = jsonPMR.price;

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />";
    
    if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", true))

    } else if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", true))
    }
    else if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", true))
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });

    numberOfPrintedSheets = numberOfPrintedSheets * montage

    checkLabel +="Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + ream +  "<br />";
    checkLabel +="Цена одного реза: " + cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / ream * cut * cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0

    }
    numberOfForms = (face + turnover + +varnishing.value) * montage;
    numberOfForms = numberOfForms / rev;
    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + formPrice + "$" +  "<br />";
    var formCost = formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (paperWidth / 1000) * (paperLength / 1000)  * (jsonP.weight / 1000) * allPaper
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + fittingTime + " сек" + "<br />";
    var fitting = fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />"

    checkLabel +="Время на 1 пантон: " + timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    checkLabel +="Скорость печати: " + (printSpeed * printSpeedRatio) + "<br />";

    var coeff = 1;

    if(jsonP.weight <= 170){
        coeff = Math.ceil((allFittingPaper + numberOfPrintedSheets) / 3000);
        paperChargingTime += (120 * coeff);

    } else if(jsonP.weight >= 200 && jsonP.weight <= 250) {
        coeff = Math.ceil((allFittingPaper + numberOfPrintedSheets) / 1900);
        paperChargingTime += (90 * coeff);
    }
    else if (jsonP.weight >=300 || paperType == "Carton"){
        coeff = Math.ceil((allFittingPaper + numberOfPrintedSheets) / 850);
        paperChargingTime += (60 * coeff);
    }

    if(printSpeed != 0){
        var iterations = Math.ceil(face / numberOfSections) + Math.ceil(turnover / numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / paperChargingTime) * iterations ) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime2 = (((numberOfPrintedSheets / (printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones;  //время печати
        var date2 = new Date(null);
        date2.setSeconds(printTime2); // specify value for SECONDS here
        checkLabel +="Время только печати без приладки: " + date2.getUTCHours() + " ч " + date2.getMinutes() + " м " + date2.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати с зарядкой без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Общее время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    allCost += (printing * jsonPP.scoring * +scoring.value);
    checkLabel +="Стоимость биговка: " + (printing * jsonPP.scoring * +scoring.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.hole * +hole.value);
    checkLabel +="Стоимость отверстие: " + (printing * jsonPP.hole * +hole.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.grommet * +grommet.value);
    checkLabel +="Стоимость люверс: " + (printing * jsonPP.grommet * +grommet.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.rounding * +rounding.value);
    checkLabel +="Стоимость скругление: " + (printing * jsonPP.rounding * +rounding.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.brace * +brace.value);
    checkLabel +="Стоимость Скоб: " + (printing * jsonPP.brace * +brace.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.folding * +folding.value);
    checkLabel +="Стоимость Фальцовка: " + (printing * jsonPP.folding * +folding.value).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.compilation * +compilation.value);
    checkLabel +="Стоимость Подборки: " + (printing * jsonPP.compilation * +compilation.value).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.numberNumeration * +numiration.value);
    checkLabel +="Стоимость Нумерации: " + (printing * jsonPP.numberNumeration * +numiration.value).toFixed(2) + "$" +  "<br />";

    allCost += (+gluingPVA.value > 250 ? jsonPP.gluingPVAMore250 * +gluingPVA.value : jsonPP.gluingPVA * +gluingPVA.value) ;
    checkLabel +="Стоимость Склейки ПВА: " + (+gluingPVA.value > 250 ? jsonPP.gluingPVAMore250 * +gluingPVA.value : jsonPP.gluingPVA * +gluingPVA.value).toFixed(2) + "$" +  "<br />";

    var jsonTC = jsonObj["ThermalCover"][+thermalCover.value];
    allCost += (printing * jsonTC.price );
    checkLabel +="Стоимость Термопереплёта: " + (printing * jsonTC.price ).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    var jsonS = jsonObj["Spring"][spring];
    allCost += (springNumber * jsonS.price );
    checkLabel +="Стоимость Пружин: " + (springNumber * jsonS.price ).toFixed(2) + "$" +  "<br />";

    numberOfPS = numberOfPrintedSheets;
    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(cuttingDownVal < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Стоимость штампования: " + (+stamp.value).toFixed(2) + "BYN" +  "<br />";

    var jsonG = jsonObj["Gluing"][0];
    allCost += (printing * +glueGun .value * jsonG.glueGun)
    checkLabel +="Стоимость склейки Пистолет: " + (printing * +glueGun .value * jsonG.glueGun).toFixed(2) + "$" +  "<br />";
    allCost += (printing * +scotch.value * jsonG.scotch)
    checkLabel +="Стоимость склейки Скотч: " + (printing * +scotch.value * jsonG.scotch).toFixed(2) + "$" +  "<br />";
    var buildPackagePrice = 0;
    if(buildPackage.checked){
        if(printing > jsonG.BuildPackage[3].after){
            buildPackagePrice = jsonG.BuildPackage[3].price
        } else {
            for(i=0;i<3;i++){
               if(printing <=  jsonG.BuildPackage[i].before) {
                buildPackagePrice = jsonG.BuildPackage[i].price
                break;
               }
            }
        }
    }
    allCost += (printing * buildPackagePrice)
    checkLabel +="Стоимость сборки пакетов: " + (printing * buildPackagePrice).toFixed(2) + "$" +  "<br />";

    var jsonPast = jsonObj["Pasting"][+pasting.value];
    allCost += (numberOfPrintedSheets * jsonPast.price );
    checkLabel +="Стоимость Кашировки: " + (numberOfPrintedSheets * jsonPast.price ).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.cutting * +cutting.value);
    checkLabel +="Стоимость Надрезки: " + (printing * jsonPP.cutting * +cutting.value).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.insertSheetsInBlock * +insertSheetsInBlock.value);
    checkLabel +="Стоимость вставки листов в блок: " + (printing * jsonPP.insertSheetsInBlock * +insertSheetsInBlock.value).toFixed(2) + "$" +  "<br />";


    checkLabel +="Курс доллара: " + (jsonObjDollar * jsonC.dollarCoeff).toFixed(2) + "/" + Number(jsonObjDollar).toFixed(2)  + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + (allCost + (+stamp.value / jsonObjDollar)).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " BYN" +  "<br />";
    finalCost.innerHTML = "Цена: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff)) + +stamp.value).toFixed() + " руб.";

    if (numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) == numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) && numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) == 0) {
        getPaperFormat(false)
    }

    labelCheck.innerHTML = checkLabel;

    function showTechnicalData() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textFolding = "";
        var textScoring = "";
        var textCuttingDown = "";
        var textRev = "";
        var textNumeration = "";
        var textGrommet = "";
        var textCutting = "";
        var textHole = "";
        var textCompilation = "";
        var textBrace = "";
        var textRounding = "";
        var textBuildPackage = "";
        var textGluingPVA = "";
        var textGlueGun = ""; 
        var textScotch = ""; 
        var textThermalCover = "";
        var textStamp = "";

        numberOfParts  != 6 ? numberOfParts += " части " : numberOfParts += " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage > 1 && montage != undefined ? textMontage = montage : textMontage =  1;
        thermalCover.value != 0 ? textThermalCover = '<label class="description">**Переплёт: **Термо ' + thermalCover.options[thermalCover.selectedIndex].text + '</label><br/>' : textThermalCover = ""; 
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        !scoring.disabled ? textScoring = "да" : textScoring = "нет";
        !folding.disabled ? textFolding = "да"  : textFolding = "нет"; 
        !insertSheetsInBlock.disabled ? textInsertSheetsInBlock = "да" : textInsertSheetsInBlock = "нет";
        !numiration.disabled ? textNumeration = "да"  : textNumeration = "нет"; 
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 
        buildPackage.checked ? textBuildPackage = "да"  : textBuildPackage = "нет"; 
        !grommet.disabled ? textGrommet = "да"  : textGrommet = "нет"; 
        !cutting.disabled ? textCutting = "да"  : textCutting = "нет"; 
        !hole.disabled ? textHole = "да"  : textHole = "нет"; 
        !compilation.disabled ? textCompilation = "да"  : textCompilation = "нет"; 
        !brace.disabled ? textBrace = "да"  : textBrace = "нет"; 
        !rounding.disabled ? textRounding = "да"  : textRounding = "нет"; 
        !gluingPVA.disabled ? textGluingPVA = "да"  : textGluingPVA = "нет"; 
        !glueGun.disabled ? textGlueGun = "да"  : textGlueGun = "нет"; 
        !scotch.disabled ? textScotch = "да"  : textScotch = "нет"; 
        rev == 1 ? textRev = ' / Чужой оборот ' : textRev =  ' / Свой оборот ' ; 
        !stamp.disabled ? textStamp = "да"  : textStamp = "нет"; 
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + textRev + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets / montage + " х " + textMontage +  " / приладка: " + allFittingPaper / montage + " на лист " + '</label><br/>'
        html +=         textThermalCover;
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         textThermalCover;
        html +=         textVarnishingUV;
        html +=         '<label class="description">Биговка: ' + textScoring + '</label><br/>';
        html +=         '<label class="description">Вставка листов в блок: ' + textInsertSheetsInBlock + '</label><br/>';
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=         '<label class="description">Нумерация: ' + textNumeration + '</label><br/>'; 
        html +=         '<label class="description">Люверсы: ' + textGrommet + '</label><br/>'; 
        html +=         '<label class="description">Надрезка: ' + textCutting + '</label><br/>'; 
        html +=         '<label class="description">Отверстие: ' + textHole + '</label><br/>'; 
        html +=         '<label class="description">Подборка: ' + textCompilation + '</label><br/>'; 
        html +=         '<label class="description">Сборка пакетов: ' + textBuildPackage + '</label><br/>'; 
        html +=         '<label class="description">Склейка ПВА: ' + textGluingPVA + '</label><br/>'; 
        html +=         '<label class="description">Склейка пистолет: ' + textGlueGun + '</label><br/>'; 
        html +=         '<label class="description">Склейка скотч: ' + textScotch + '</label><br/>'; 
        html +=         '<label class="description">Скобы: ' + textBrace + '</label><br/>';
        html +=         '<label class="description">Скругление: ' + textRounding + '</label><br/>';
        html +=         '<label class="description">Фальцовка: ' + textFolding + '</label><br/>';
        html +=         '<label class="description">Штамп: ' + textStamp + '</label><br/>';

        html +=     '</div> '

        return html;  
    }

    if(printedMachine.value != ""){
        techData.innerHTML = showTechnicalData();
    }
    
}

function getStateElem(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "rounding") {
                elemField.disabled = false; elemField.value = 4;
            } else if(elem.name == "cuttingDown") {
                elemField.disabled = false; elemField.value = numberOfPS;
            }  else if(elem.name == "stamp") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculatePrintedField();
     
    }
}

function getNumberOfCuts(numberWidth, numberLength, allowance){

    var cut = document.getElementById('cut');
    if(cut.getAttribute("flag") == "false"){
        var numberOfCuts = 4;

        if(allowance==0){
            numberOfCuts += (numberWidth - 1) + (numberLength - 1);
        }
        else {
            numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
        }
        cut.value = numberOfCuts;
    }
}

function getRev(numberOfProduct){
    var rev = document.querySelector('input[name=rev]:checked').value;
    var ownRev = document.getElementById('ownRev');
    var ownRevChecked = ownRev.checked;
    var anotherRev = document.getElementById('anotherRev');
    var face = Number(document.getElementById('face').value);
    var turnover = Number(document.getElementById('turnover').value);
    var varnishing = document.getElementById('varnishing').value;
    varnishing == "1" ? face + 1 : "";
    varnishing == "2" ? face + 1 || turnover + 1 : "";

    if(numberOfProduct % 2 == 0){
        ownRev.disabled = false;
        
    } else if (numberOfProduct <= 1){
        ownRev.disabled = true;
        ownRev.checked = false;
        anotherRev.checked = true;
    }
    else if (numberOfProduct <= 1){
        ownRev.disabled = true;
        ownRev.checked = false;
        anotherRev.checked = true;
    }
    else if (face > turnover){
        ownRev.disabled = true;
        ownRev.checked = false;
        anotherRev.checked = true;
    }
    else if (turnover == 0){
        ownRev.disabled = true;
        ownRev.checked = false;
        anotherRev.checked = true;
    }
    else {
        ownRev.disabled = true;
        ownRev.checked = false;
        anotherRev.checked = true;
    }

    if(ownRev.disabled == false){
        ownRev.checked = ownRevChecked;
    }
}

function getThermalCover() {
    var thermalCover = document.getElementById("thermalCover");
    if (thermalCover.options.length == 0){
        var jsonL = jsonObj["ThermalCover"];
        jsonL.forEach(function(elem) {
            thermalCover.options[thermalCover.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculatePrintedField();
}

function getLaminade() {
    var laminade = document.getElementById("laminade"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculatePrintedField();
}

function getSpring() {
    var spring = document.getElementById("spring"); //получаем элемент по его ID
    var springNumber = document.getElementById("springNumber"); //получаем элемент по его ID
    if (spring.options.length == 0){
        var jsonL = jsonObj["Spring"]; 
        jsonL.forEach(function(elem) {
            spring.options[spring.options.length] = new Option(elem.name, elem.id);
        });
    } 
    if (spring.value == 0){
        springNumber.disabled = true; 
        springNumber.value = 0;
    } else {
        springNumber.disabled = false; 
        springNumber.value = 1;
    }
    calculatePrintedField();
}

function getPasting() {
    var pasting = document.getElementById("pasting");
    if (pasting.options.length == 0){
        var jsonL = jsonObj["Pasting"]; 
        jsonL.forEach(function(elem) {
            pasting.options[pasting.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculatePrintedField();
}

function numberProductPerSheet(widthPrintedArea, lengthPrintedArea, position, rev){
    var width = Number(document.getElementById('width').value); //получаем значения полей
    var length = Number(document.getElementById('length').value);
    var allowance = Number(document.getElementById('allowance').value);
    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }
    if(rev){
        getRev(Math.trunc(numberLength));
    }
    
    getNumberOfCuts(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function getRentability() {
    var printedMachine = document.getElementById("printedMachine").value;
    var rentability = document.getElementById("rentability"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
    calculatePrintedField();
}

function getPaperFormat(firstCall) {
    var paperFormat = document.getElementById("paperFormat"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeight").value; //получаем value выбранного элемента option по ID элемента select 
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var printedMachine = document.getElementById('printedMachine').value;
        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printing').value);
        var numberOfPrintedSheets = 0;
        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){
                    width = Number(document.getElementById('width').value);
                    length = Number(document.getElementById('length').value);
                    allowance = Number(document.getElementById('allowance').value);
                    width = width + (allowance * 2) // прибавляем припуски
                    length = length + (allowance * 2)

                    if (width == length && width >= 165 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 165 && width <= 165){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 165 && width <= 165 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 165 && length <= 165 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });

                                if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                map.set(formatId, numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0;
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value
                                        maxK = key
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                            }
                        });
                    }
                }
            });
        });
    }
    calculatePrintedField();
    getPrintedMachine();
}

function getPaperWeight() {
    var paperWeight = document.getElementById("paperWeight");

    if (paperWeight.options.length == 0){
        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonAdhesive = jsonObj["Paper"]["Adhesive"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonAdhesive, paperWeight, "Adhesive");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                if(papetType == "Glossy" && elem.id =="3"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        }
    }
    getPaperFormat(false);
}

function getPrintedMachine(){
    var printedMachine = document.getElementById("printedMachine");
    var face = Number(document.getElementById('face').value);
    var turnover = Number(document.getElementById('turnover').value);
    var pantone = Number(document.getElementById('pantone').value); 
    var varnishing = document.getElementById('varnishing').value;
    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeight").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && pantone == 0){
            if(paperType == "Offset" && varnishing == "NO"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } else if(face == 1 && pantone == 1 && paperType == "Offset"){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    calculatePrintedField();
}

//бланки
var wobblersContainer = document.getElementById("wobblersContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12 padding-none">'				
html +=             '<div class="col-md-6">'
html +=                 '<h2>Воблеры</h2>'
html +=             '</div>'
html +=             '<div class="col-md-6">'
html +=                 '<label id="final-costWobblers" class="final-cost-description"></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<hr style="margin:0px; margin-top:10px;"/>'
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingWobblers" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateWobblers()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatWobblers" name="formatWobblers" onchange="getPaperFormatWobblers(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthWobblers" class="element text medium" type="number" min="0" oninput="getPaperFormatWobblers(false)" maxlength="255"  value="200" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthWobblers" class="element text medium" type="number" min="0" oninput="getPaperFormatWobblers(false)" maxlength="255" value="200"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceWobblers" class="element text medium" type="number" min="0" oninput="getPaperFormatWobblers(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'		
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-2">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceWobblers" class="element text medium" type="number" min="0" oninput="getPaperWeightWobblers()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverWobblers" class="element text medium" type="number" min="0" oninput="getPaperWeightWobblers()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneWobblers" class="element text medium" type="number" min="0" oninput="getPrintedMachineWobblers()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingWobblers" name="varnishingWobblers" onchange="getPrintedMachineWobblers()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="2">Офсетный x2</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '<option value="4">УФ-лакировка x2</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightWobblers" name="paperWeightWobblers" onchange="getPaperWeightWobblers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-2">'	
html +=         '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="paperFormatWobblers" name="paperFormatWobblers" onchange="getPaperFormatWobblers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="printedMachineWobblers" name="printedMachineWobblers" onchange="calculateWobblers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-2">'
html +=             '<label class="description"><br/></label>'
html +=             '<div>'
html +=                 '<select id="rentabilityWobblers" name="rentabilityWobblers" onchange="calculateWobblers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-none">'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeWobblers"  name="laminadeWobblers" onchange="getLaminadeWobblers()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownWobblers" name="cuttingDownWobblers" class="col-md-1 checkbox"  type="checkbox" onchange="calculateWobblers()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=     '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label class="description">Количество резов на лист: <label id="checkWobblersCuts" ></label></label>'
html +=                 '<br/><label id="checkWobblersField" class="description"></label>'
html +=                 '<br/><label id="checkWobblers" class="description"></label>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 padding-none">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Технические данные<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<div id="techDataWobblers" class="description tech-data"></div>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
wobblersContainer.innerHTML = html;     

function Wobblers() {
    getWobblersFormat();
    getPaperWeightWobblers();
    getPrintedMachineWobblers();
    getPaperFormatWobblers();
    getRentabilityWobblers();
    getLaminadeWobblers();
    getStateElemWobblers(true);
}

function calculateWobblers() {
    var finalCostWobblers = document.getElementById('final-costWobblers');
    var labelCheck = document.getElementById('checkWobblers');
    var printing = Number(document.getElementById('printingWobblers').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsWobblers());
    var printedMachine = document.getElementById("printedMachineWobblers");
    var rentabilityId = Number(document.getElementById("rentabilityWobblers").value); 
    var turnoverElem = document.getElementById('turnoverWobblers');
    var laminade = document.getElementById('laminadeWobblers');
    var paperFormat = document.getElementById("paperFormatWobblers");
    var cuttingDown = document.getElementById("cuttingDownWobblers");
    var cut = Number(document.getElementById('checkWobblersCuts').textContent);
    var varnishing = document.getElementById('varnishingWobblers');
    var paperWeightValue = document.getElementById("paperWeightWobblers"); //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.value.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.value.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceWobblers').value);
    var turnover = Number(document.getElementById('turnoverWobblers').value);
    var pantone = Number(document.getElementById('pantoneWobblers').value);
    var techDataWobblers = document.getElementById('techDataWobblers');

    var jsonPM = jsonObj["PrintingMachine"][printedMachine.value];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat.value];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    var varnishingCost = 0;
    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;

    jsonFP.some(function(elem) {
        
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        } else if (elem.id == jsonFP.length-1 && numberOfPrintedSheets > elem.before) {
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsWobblers()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine.value]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

    if(numberOfPrintedSheets < 300){
        rentabilityPrice = rentabilityPrice * jsonPM.coefficientIfSmallPrinting;
    }

    if(paperType == "Adhesive"){
        turnoverElem.value = 0;
        turnover = 0;
        numberOfParts = 2;
    }
   
    checkLabel +="Цена химии за 1000 печатных листов: " + jsonPM.chemistryPrice + "$" +  "<br />";
    var chemistryCost = numberOfPrintedSheets / 1000 * jsonPM.chemistryPrice // стоимость химии
    checkLabel +="Стоимость химии: " + chemistryCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * cut * jsonPM.cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    if(varnishing.value == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing.value == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    else {
        varnishing.value == "1" || varnishing.value == "2" ? varnishing.value = Number(varnishing.value) : varnishing.value = 0
        
    }
    numberOfForms = (face + turnover + +varnishing.value);

    checkLabel +="Количество форм : " + numberOfForms +  "<br />";
    
    checkLabel +="Цена формы: " + jsonPM.formPrice + "$" +  "<br />";
    var formCost = jsonPM.formPrice * numberOfForms;
    checkLabel +="Стоимость форм: " + formCost.toFixed(1) + "$" +  "<br />";

    checkLabel +="Количество бумаги на приладку одной формы : " + numberOfFittingPaper +  "<br />";
    var allFittingPaper = numberOfFittingPaper * numberOfForms;
    checkLabel +="Бумага на приладку : " + allFittingPaper +  "<br /><hr>";

    var allPaper =  Math.ceil((numberOfPrintedSheets + allFittingPaper) / numberOfParts);
    checkLabel +="Всего бумаги на тираж: " + allPaper + "<br />";

    var paperWeight = (jsonCPF.width / 1000) * (jsonCPF.length / 1000)  * (jsonP.weight / 1000) * allPaper;
    checkLabel +="Вес бумаги в кг: " + paperWeight.toFixed(2) + "<br />";

    checkLabel +="Время на приладку одной формы : " + jsonPM.fittingTime + " сек" + "<br />";
    var fitting = jsonPM.fittingTime * numberOfForms;
    var date0 = new Date(null);
        date0.setSeconds(Math.ceil(fitting)); // specify value for SECONDS here
    checkLabel +="Время приладки: " + date0.getUTCHours() + " ч " + date0.getMinutes() + " м " + date0.getSeconds() + " сек" + "<br />";

    checkLabel +="Время на 1 пантон: " + jsonPM.timeOfOnePantone + " сек" + "<br />";
    var timeOfPantones = pantone * jsonPM.timeOfOnePantone;  //время печати
    checkLabel +="Время на пантоны: " + timeOfPantones + " сек" + "<br />";

    if(jsonP.weight >= 300 || paperType == "Carton"){
        printSpeedRatio = jsonPM.printSpeedRatio;
    } 

    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) + +varnishing.value;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations) + timeOfPantones + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting + timeOfPantones + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    
    checkLabel +="Cтоимость за кг: " + jsonP.price + "<br />";

    var paperCost = paperWeight * jsonP.price  ;
    checkLabel +="Стоимость бумаги: " + paperCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    if(cuttingDown.checked){
        for(let elem of jsonCD){
            if(numberOfPrintedSheets < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }
   
    allCost += jsonPP.wobblerLegPrice * printing;
    checkLabel +="Стоимость ножек для воблеров: " + (jsonPP.wobblerLegPrice * printing).toFixed(2) + "$" +  "<br />";

    allCost += jsonPP.stickWobblerLeg * printing;
    checkLabel +="Стоимость работы по приклейк воблеров: " + (jsonPP.stickWobblerLeg * printing).toFixed(2) + "$" +  "<br />";
   
    var jsonL = jsonObj["Laminade"][+laminade.value];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + (allCost).toFixed()+ "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " BYN" +  "<br />";
    finalCostWobblers.innerHTML = "Цена: " + ((allCost * (jsonObjDollar * jsonC.dollarCoeff))).toFixed() + " руб.";

    labelCheck.innerHTML = checkLabel;

    function showTechnicalDataWobblers() {

        var html = "";
        var textPantone = "";
        var textMontage = "";
        var textLaminade = "";
        var textVarnishing = "";
        var textVarnishingUV = "";
        var textCuttingDown = "";
        var numberOfParts = 0;

        getNumberOfPartsWobblers() != 6 ? numberOfParts = getNumberOfPartsWobblers() + " части " : numberOfParts = getNumberOfPartsWobblers() + " частей ";

        pantone != 0 && pantone != undefined ? textPantone = "/ пантонов " + pantone : textPantone = ""; 
        if(varnishing.value != 3 && varnishing.value != 4){
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishing = "/ лакирова " + varnishing.options[varnishing.selectedIndex].text : textVarnishing = ""; 
        }
        else {
            varnishing.value != 0 && varnishing.value != undefined ? textVarnishingUV = '<label class="description">' + varnishing.options[varnishing.selectedIndex].text + "</label><br>" : textVarnishingUV = "";   
        }
        
        montage.value > 1 && montage.value != undefined ? textMontage = " x " + montage : textMontage =  1;
        laminade.value != 0 && laminade.value != undefined && laminade.value != "" ? textLaminade = " / ламинат " + laminade.options[laminade.selectedIndex].text : textLaminade = ""; 
        cuttingDown.checked ? textCuttingDown = "да"  : textCuttingDown = "нет"; 
           
    
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##/## ' + printedMachine.options[printedMachine.selectedIndex].text + " - " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + ' ##/##</b></label><br/>'
        html +=         '<label class="description">**Цветность: **' + face + "+" + turnover + " " + textPantone + " " + textVarnishing + ' / Чужой оборот ' + " " + textLaminade  + '</label><br/>'
        html +=         '<label class="description">**Бумага: **' + paperWeightValue.options[paperWeightValue.selectedIndex].text + " / " + paperFormat.options[paperFormat.selectedIndex].text +  " / " + allPaper + " л. / режем на " + numberOfParts + '</label><br/>'
        html +=         '<label class="description">**В техкарту: **тираж ' + numberOfPrintedSheets + " х " + textMontage +  " / приладка: " + allFittingPaper + " на лист " + '</label><br/>'
        html +=     '</div>'
        html +=     '<div class="col-md-12"><br/></div>'
        html +=     '<div class="col-md-12 padding-none">'
        html +=         '<label class="description">##Переплётные работы</label><br/>'
        html +=         '<label class="description">Вырубка: ' + textCuttingDown + '</label><br/>'; 
        html +=          textVarnishingUV;
        html +=         '<label class="description">Склейка: да</label><br/>'; 
        html +=     '</div> '

        return html;  
    }

    techDataWobblers.innerHTML = showTechnicalDataWobblers();
}

function getNumberOfPartsWobblers() {
    var paperFormat = document.getElementById('paperFormatWobblers').value; 
    var formatWobblers = +document.getElementById('formatWobblers').value;
    var width = 0;
    var length = 0;
    var allowance = 0;
    var numberOfParts = 0;

    if(formatWobblers == 2){
        width = Number(document.getElementById('widthWobblers').value);
        length = Number(document.getElementById('lengthWobblers').value);
    } else {
        var jsonPWobblers = jsonObj["Paper"]["Wobblers"][formatWobblers];
        width = jsonPWobblers.width;
        length = jsonPWobblers.length;
    } 

    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    if(paperFormat == "0" || paperFormat == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
        numberOfParts = 2;
    } else if (paperFormat == "7"){
        if (width == length && width >= 165 && width <= 220){
            numberOfParts = 6;
        } else if (width >= 165 && width <= 220 && length >= 400 && length <= 500){
            numberOfParts = 6;
        } else if (length >= 165 && length <= 220 && width >= 400 && width <= 500) {
            numberOfParts = 6;
        }
        else {
            numberOfParts = 4;
        }
    } else {
        numberOfParts = 4;
    }

    return numberOfParts
}

function getStateElemWobblers(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "stampWobblers") {
                elemField.disabled = false; elemField.value = 0;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculateWobblers(); 
    };
}

function getNumberOfCutsWobblers(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkWobblersCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getRentabilityWobblers() {
    var printedMachine = document.getElementById("printedMachineWobblers").value;
    var rentability = document.getElementById("rentabilityWobblers"); //получаем элемент по его ID
    if (rentability.options.length == 0){
        var jsonPM = jsonObj["PrintingMachine"];
        jsonPM.forEach(function(elem) {
            if(printedMachine == elem.id){
                var jsonPMR = jsonObj["PrintingMachine"][elem.id]["Rentability"];
                jsonPMR.forEach(function(rent){
                    if(rent.id == elem.defaultRentabilityId){
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id, true, true);
                    } else {
                        rentability.options[rentability.options.length] = new Option(rent.name, rent.id);
                    }
                });
            }
        });
    }
}

function getLaminadeWobblers() {
    var laminade = document.getElementById("laminadeWobblers"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            if(elem.id == "0"){
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
            }
        });
    }
    calculateWobblers();
}

function getWobblersFormat() {
    var formatWobblers = document.getElementById("formatWobblers");
    formatWobblers.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Wobblers"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatWobblers.options[formatWobblers.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatWobblers.options[formatWobblers.options.length] = new Option(elem.name, elem.id);
        }   
    });
}

function getPaperFormatWobblers(firstCall) {
    var paperFormat = document.getElementById("paperFormatWobblers"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightWobblers").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineWobblers').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatWobblers = +document.getElementById('formatWobblers').value;
        var printing = Number(document.getElementById('printingWobblers').value);
        var printing = Number(document.getElementById('printingWobblers').value);
        var widthWobblers = document.getElementById('widthWobblers');
        var lengthWobblers = document.getElementById('lengthWobblers');
        var allowance = Number(document.getElementById('allowanceWobblers').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var width = 0;
        var length = 0;
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatWobblers != 2){
                        widthWobblers.disabled = true;
                        lengthWobblers.disabled = true;
                        
                        var jsonPWobblers = jsonObj["Paper"]["Wobblers"][formatWobblers];
                        width = jsonPWobblers.width;
                        length = jsonPWobblers.length;
                    }
                    else {
                        widthWobblers.disabled = false;
                        lengthWobblers.disabled = false;
                        
                        width = Number(document.getElementById('widthWobblers').value);
                        length = Number(document.getElementById('lengthWobblers').value);
                    }

                    width +=  (allowance * 2) // прибавляем припуски
                    length += (allowance * 2)

                    if (width == length && width >= 200 && width <= 220){
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                        if(elem.id == '7' ){ //id=7 72х104
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        else {
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                        }
                    } 
                    else {
                        var jsonCPF = jsonObj["Paper"]["Format"];

                        jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
                            if(elem.id == formatId){
                                if(elem.id == "0" || elem.id == "1"){ // 0 и 1 это id для форматов самоклеящейся бумаги
                                    widthPrintedArea = elem.width - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                } else if (elem.id == "7"){
                                    if (width == length && width >= 200 && width <= 220){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
                                        widthPrintedArea = (elem.width / 3) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    } else {
                                        widthPrintedArea = (elem.width / 2) - 2; 
                                        lengthPrintedArea = (elem.length / 2) -2;
                                    }
                                } else {
                                    widthPrintedArea = (elem.width / 2) - 2; 
                                    lengthPrintedArea = (elem.length / 2) -2;
                                }

                                var jsonPM = jsonObj["PrintingMachine"];
                                jsonPM.forEach(function(elem) {
                                    if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}
                                        if (widthPrintedArea > lengthPrintedArea){
                                            lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                                            widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
                                        } else {
                                            lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                                            widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
                                        }
                                    }
                                });
                                
                                if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", true))
                                } else {
                                    numberOfPrintedSheets = "Ошибка"
                                }

                                isNaN(numberOfPrintedSheets)? numberOfPrintedSheets = Infinity : "";

                                map.set(formatId, +numberOfPrintedSheets);

                                var maxK = 0,
                                    maxV = 0,
                                    i = 0;
                                for (let [key, value] of map) {     // get data sorted
                                    if(i == 0){
                                        isNaN(value) ? value = Infinity: "";
                                        maxV=value;
                                        maxK = key;
                                        i++;
                                    }
                                    else{
                                        if (maxV > value){
                                            maxV = value;
                                            maxK = key;
                                        } 
                                    }
                                }
                                if(elem.id == maxK ){ 
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                                }
                                else {
                                    paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id);
                                }
                                
                            }
                        });
                    }
                }
            });
        });
    }
    getPrintedMachineWobblers();
}

function numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatWobblers = +document.getElementById('formatWobblers').value;
    var allowance = Number(document.getElementById('allowanceWobblers').value);
    var width = 0;
    var length = 0;

    if(formatWobblers != 2){
        var jsonPWobblers = jsonObj["Paper"]["Wobblers"][formatWobblers];
        width = jsonPWobblers.width;
        length = jsonPWobblers.length;
    }
    else {
        width = Number(document.getElementById('widthWobblers').value);
        length = Number(document.getElementById('lengthWobblers').value);
    }

    width +=  (allowance * 2) // прибавляем припуски
    length += (allowance * 2)
        
    if(position == "W"){
        if (widthPrintedArea >= width && lengthPrintedArea >= length ){
            numberWidth = widthPrintedArea / width;
            numberLength = lengthPrintedArea / length;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength)); // получаем количество изделий на листе
        } else {
            numberProduct = "Ошибка"
        }
    } else {
        if (widthPrintedArea >= length && lengthPrintedArea >= width ){
            numberWidth = widthPrintedArea / length;
            numberLength = lengthPrintedArea / width;
            numberProduct = (Math.trunc(numberWidth) *  Math.trunc(numberLength));
        } else {
            numberProduct = "Ошибка"
        }
    }

    getNumberOfCutsWobblers(Math.trunc(numberWidth), Math.trunc(numberLength), allowance);

    return numberProduct
}

function getPaperWeightWobblers() {
    var paperWeight = document.getElementById("paperWeightWobblers");
    var face = Number(document.getElementById('faceWobblers').value);
    var turnover = Number(document.getElementById('turnoverWobblers').value);

    if( paperWeight.options.length == 0 ) {

        var jsonOffset = jsonObj["Paper"]["Offset"];
        var jsonGlossy = jsonObj["Paper"]["Glossy"];
        var jsonMat = jsonObj["Paper"]["Mat"];
        var jsonCarton = jsonObj["Paper"]["Carton"];

        getTypePaper(jsonOffset, paperWeight, "Offset");
        getTypePaper(jsonGlossy, paperWeight, "Glossy");
        getTypePaper(jsonMat, paperWeight, "Mat");
        getTypePaper(jsonCarton, paperWeight, "Carton");
        
        function getTypePaper(objJSON, htmlObj, papetType){
            objJSON.forEach(function(elem) {
                
                if(papetType == "Mat" && elem.id =="7"){
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id, true, true);
                } else {
                    htmlObj.options[htmlObj.options.length] = new Option(elem.name, papetType + "_" + elem.id);
                }
            });
        } 
    }
    getPaperFormatWobblers(false);
}

function getNumberOfProductsWobblers() {

    var allowance = document.getElementById('allowanceWobblers').value;
    var paperFormatB = document.getElementById("paperFormatWobblers").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineWobblers").value;
    var labelCheck = document.getElementById('checkWobblersField');
    var printing = Number(document.getElementById('printingWobblers').value);

    var numberOfPrintedSheets = 0;
    var checkLabel = "";
    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;

    var jsonCPF = jsonObj["Paper"]["Format"];
        
    jsonCPF.forEach(function(elem) { //вычисляем размер запечатываемой области, делим лист на 4, для этого каждый размер делим на 2, подчищаем 2мм,
        
        if(elem.id == paperFormatB){
            paperWidth = elem.width;
            paperLength = elem.length;

            paperWidth += (allowance * 2) // прибавляем припуски
            paperLength += (allowance * 2)

            widthPrintedArea = (elem.width / 2) - 2; 
            lengthPrintedArea = (elem.length / 2) -2;
            numberOfParts = 4;
        }
    });

    var jsonPM = jsonObj["PrintingMachine"];
    jsonPM.forEach(function(elem) {
        if(printedMachine != "" && elem.id == printedMachine) { // для большей и меньшей стороны{}

            if (widthPrintedArea > lengthPrintedArea){
                lengthPrintedArea = lengthPrintedArea - (elem.flap + elem.scale) ;
                widthPrintedArea = widthPrintedArea - (elem.sideField * 2);
            } else {
                lengthPrintedArea = lengthPrintedArea - (elem.sideField * 2);
                widthPrintedArea = widthPrintedArea - (elem.flap + elem.scale);
            }
        }
    });

    checkLabel += "Размер запечатываемого поля:" + String(widthPrintedArea) +"x"+ String(lengthPrintedArea) + "<br />";
    checkLabel +="Количество изделий на листе при расположении в ширину:" + numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) + "<br />";
    checkLabel +="Печатных листов при расположении в ширину:" + Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false))  + "<br />";
    checkLabel +="Количество изделий на листе при расположении в длинну:" + numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) + "<br />";
    checkLabel +="Печатных листов при расположении в длинну:" + Math.ceil(printing / numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false)) + "<br />"; 

    if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
        numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", true);

    } else if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
        numberOfPrintedSheets = numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", true)
    }
    else if(numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
        numberOfPrintedSheets = numberProductPerSheetWobblers(widthPrintedArea, lengthPrintedArea, "W", true)
    } else {
        numberOfPrintedSheets = "Ошибка"
    }
    
    labelCheck.innerHTML = checkLabel;
        
    return numberOfPrintedSheets;
}


function getPrintedMachineWobblers(){
    var printedMachine = document.getElementById("printedMachineWobblers");
    var face = Number(document.getElementById('faceWobblers').value);
    var turnover = Number(document.getElementById('turnoverWobblers').value);
    var pantone = Number(document.getElementById('pantoneWobblers').value); 
    var varnishing = document.getElementById('varnishingWobblers').value;

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightWobblers").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    jsonPM.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор

        if(face > 2){
            if(elem.id == '0'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 2){
            if(elem.id == '1'){ 
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }
            else {
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            }
        } else if(face == 1 && turnover == 1){
            if(paperType == "Offset" && varnishing == "0"){
                if(elem.id == '2'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            } else {
                if(elem.id == '1'){ 
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
                }
                else {
                    printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
                }
            }
        } 
        else {
            if(elem.id == '1'){
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id, true, true);
            }  
            else{
                printedMachine.options[printedMachine.options.length] = new Option(elem.name, elem.id);
            } 
        }    
    });
    
    calculateWobblers();
}