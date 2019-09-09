//бирдекели
var bierdequelContainer = document.getElementById("bierdequelContainer");
var html = '<div class="row ">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12">'
html +=             '<h2>Бирдекели</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingB" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBierdequels()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Размер изделия</label>'			
html +=             '<div>'
html +=                 '<select id="sizeB" name="sizeB" onchange="getBierdequelsSize()"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '
html +=         '<div class="col-md-6">'				
html +=             '<label class="description">1-сторона</label>'			
html +=             '<div>'
html +=                 '<select id="side1" name="side1" onchange="getBierdequelsSide1()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-6">'			
html +=             '<label class="description">2-сторона</label>'			
html +=             '<div>'
html +=                 '<select id="side2" name="side2" onchange="getBierdequelsSide2()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightB" name="paperWeight" onchange="getPaperWeightB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatB" name="paperFormat" onchange="getPaperFormatB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineB" name="printedMachine" onchange="calculateBierdequels() "></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityB" name="rentability" onchange="getRentabilityB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownB" name="cuttingDownB" class="col-md-1 checkbox"  type="checkbox" onchange="calculateBierdequels()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Кашировка</label>'
html +=                 '<div>'
html +=                     '<select id="pastingB" name="pastingB" onchange="getPastingB()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=  '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costB" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label id="checkB" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
bierdequelContainer.innerHTML = html;     


function Bierdequels() {
    
    getPrintedMachineB();
    getPaperWeightB();
    getPaperFormatB();
    getRentabilityB();
    getPastingB();
    getBierdequelsFormat();
    getBierdequelsSize();
    getBierdequelsSide1();
    getBierdequelsSide2();
}
 

function calculateBierdequels() {
    var labelCheck = document.getElementById('checkB');
    var printing = Number(document.getElementById('printingB').value);
    var numberOfPrintedSheets = Math.ceil(printing / getBierdequelsFormat());
    var printedMachine = document.getElementById("printedMachineB").value;
    var rentabilityId = Number(document.getElementById("rentabilityB").value); 
    var side1 = document.getElementById("side1").value;
    var cuttingDown = document.getElementById("cuttingDownB");
    var finalcost = document.getElementById('final-costB');
    var side2 = document.getElementById("side2").value;
    var paperFormat = document.getElementById("paperFormatB").value;
    var paperWeightValue = document.getElementById("paperWeightB").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var pasting = Number(document.getElementById("pastingB").value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonPK = jsonObj["Paper"]["Kappa"][0]
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonL = jsonObj["Laminade"];
    var checkLabel = "";

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfKappas = 0;
    var cuttingDownCost = 0;

    jsonFP.some(function(elem) {
        if(numberOfPrintedSheets <= elem.before) { 
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

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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
            if(numberOfKappas < elem.before){
                cuttingDownCost = elem.price ;
                break;
            } 
        }
    }

    allCost += cuttingDownCost;
    checkLabel +="Стоимость вырубки: " + cuttingDownCost.toFixed(2) + "$" +  "<br />";

    

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

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalcost.innerHTML ="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
}

function getPastingB() {
    var pasting = document.getElementById('pastingB');
    var side2 = document.getElementById('side2').value;
    pasting.options.length = 0;
        var jsonL = jsonObj["Pasting"]; 
        jsonL.forEach(function(elem) {
            if(elem.id != '0'){
                if(side2 != 4){
                    if(elem.id == "2"){
                        pasting.options[pasting.options.length] = new Option(elem.name, elem.id, true, true);
                    }
                    else {
                        pasting.options[pasting.options.length] = new Option(elem.name, elem.id);
                    }
                } else {
                    if(elem.id == "1"){
                        pasting.options[pasting.options.length] = new Option(elem.name, elem.id, true, true);
                    }
                    else {
                        pasting.options[pasting.options.length] = new Option(elem.name, elem.id);
                    }
                }
            }
        });
    
    calculateBierdequels();
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
    var sizeB = document.getElementById("sizeB");

    if (sizeB.options.length == 0){
        var jsonB = jsonObj["Paper"]["Bierdequels"];
        
        jsonB.forEach(function(elem) { 
            if(elem.id == '0'){
                sizeB.options[sizeB.options.length] = new Option(elem.name, elem.id, true, true);
            } else {
                sizeB.options[sizeB.options.length] = new Option(elem.name, elem.id);
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
    var sizeB = document.getElementById("sizeB").value;
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
                    
                    if(sizeB != 3){
                        widthB.disabled = true;
                        lengthB.disabled = true;
                        
                    }
                    else {
                        widthB.disabled = false;
                        lengthB.disabled = false;
                        
                    }
                    if(sizeB == 0){
                        if(elem.id == '5'){
                            paperFormat.options[paperFormat.options.length] = new Option(elem.name, elem.id, true, true);
                        }
                        
                    } else if(sizeB == 1 || sizeB ==2) {
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
    var sizeB = document.getElementById('sizeB').value;
    
    var widthB = document.getElementById('widthB');
    var lengthB = document.getElementById('lengthB');
    var allowanceB = document.getElementById('allowanceB');
    var paperFormatB = document.getElementById("paperFormatB").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineB").value;
    var numberProductPerSheet = 0;
    var numberOfParts = 0;

    switch (+sizeB) {
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Бланки</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingBL" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBlanks()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatBL" name="formatBL" onchange="getPaperFormatBL(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()"  max="4"  value="1" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBL" name="paperWeightBL" onchange="getPaperWeightBL()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBL" name="paperFormatBL" onchange="getPaperFormatBL()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBL" name="printedMachineBL" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBL" name="rentabilityBL" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-4 padding-none">'				
html +=                 '<label class="description">Нумерация</label>'
html +=                 '<div>'
html +=                     '<select id="numerationBL" name="numerationBL" onchange="calculateBlanks()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">x1</option>'
html +=                     '<option value="2">x2</option></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costBL" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label class="description">Количество резов на лист: <label id="checkBLCuts" ></label></label>'
html +=                 '<br/><label id="checkBL" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
blanksContainer.innerHTML = html;     

function Blanks() {
    getPaperWeightBL()
    getPaperFormatBL();
    getBlanksFormat();
    getPrintedMachineBL();
    getRentabilityBL();
}

function calculateBlanks() {
    var finalCostBL = document.getElementById('final-costBL');
    var labelCheck = document.getElementById('checkBL');
    var printing = Number(document.getElementById('printingBL').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProducts());
    var printedMachine = document.getElementById("printedMachineBL").value;
    var cut = Number(document.getElementById('checkBLCuts').textContent);
    var rentabilityId = Number(document.getElementById("rentabilityBL").value); 
    var turnoverElem = document.getElementById('turnoverBL');
    var paperFormat = document.getElementById("paperFormatBL").value;
    var numerationBL = document.getElementById("numerationBL").value;
    var paperWeightValue = document.getElementById("paperWeightBL").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBL').value);
    var turnover = Number(document.getElementById('turnoverBL').value);
    var pantone = Number(document.getElementById('pantoneBL').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonPK = jsonObj["Paper"]["Kappa"][0]
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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
        }
    });

    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProducts()+ "<br />";
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

    allCost += (printing * jsonPP.numeration * numerationBL);
    checkLabel +="Стоимость нумерации: " + (printing * jsonPP.numeration * numerationBL).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostBL.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
}
function getNumberOfCutsBL(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkBLCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
}

function getRentabilityBL() {
    var printedMachine = document.getElementById("printedMachineBL").value;
    var rentability = document.getElementById("rentabilityBL"); //получаем элемент по его ID
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
    var formatBL = document.getElementById("formatBL");
    formatBL.options.length = 0;

    var jsonPB = jsonObj["Paper"]["Blanks"];
    jsonPB.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatBL.options[formatBL.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatBL.options[formatBL.options.length] = new Option(elem.name, elem.id);
        }   
    });
}



function getPaperFormatBL(firstCall) {
    var paperFormat = document.getElementById("paperFormatBL"); //получаем элемент по его ID
    
    if( paperFormat.options.length == 0 || firstCall == false) {
        firstCall == false ? paperFormat.options.length = 0 : "";
        var paperWeightValue = document.getElementById("paperWeightBL").value; //получаем value выбранного элемента option по ID элемента select 
        var printedMachine = document.getElementById('printedMachineBL').value;
        var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
        var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
        var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
        var paperFormatId = jsonP.format.split(","); //получаем ID поддерживаемых форматов выбранной бумаги
        var jsonPF = jsonObj["Paper"]["Format"]; // получаем форматы бумаги
        var formatBL = +document.getElementById('formatBL').value;
        var printing = Number(document.getElementById('printingBL').value);

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingBL').value);
        var widthBL = document.getElementById('widthBL');
        var lengthBL = document.getElementById('lengthBL');
        var allowance = Number(document.getElementById('allowanceBL').value);
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatBL != 5){
                        widthBL.disabled = true;
                        lengthBL.disabled = true;
                        
                        var jsonPBL = jsonObj["Paper"]["Blanks"][formatBL];
                        width = jsonPBL.width;
                        length = jsonPBL.length;
                    }
                    else {
                        widthBL.disabled = false;
                        lengthBL.disabled = false;
                        
                        width = Number(document.getElementById('widthBL').value);
                        length = Number(document.getElementById('lengthBL').value);
                        
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

                                if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
                                    numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", true)) : numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", true))
                                } else if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", true))
                                }
                                else if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
                                    numberOfPrintedSheets = Math.ceil(printing / numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", true))
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
    
    getPrintedMachineBL();


}

function numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatBL = +document.getElementById('formatBL').value;
    var allowance = Number(document.getElementById('allowanceBL').value);
    var width = 0;
    var length = 0;

    if(formatBL != 5){
        
        var jsonPBL = jsonObj["Paper"]["Blanks"][formatBL];
        width = jsonPBL.width;
        length = jsonPBL.length;
    }
    else {

        width = Number(document.getElementById('widthBL').value);
        length = Number(document.getElementById('lengthBL').value);
        
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

    getNumberOfCutsBL(Math.trunc(numberWidth), Math.trunc(numberLength), allowance)

    return numberProduct
}

function getPaperWeightBL() {
    var paperWeight = document.getElementById("paperWeightBL");

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
    getPaperFormatBL(false);
}

function getNumberOfProducts() {

    var allowanceB = document.getElementById('allowanceBL').value;
    var paperFormatB = document.getElementById("paperFormatBL").value; //получаем элемент по его ID
    var printedMachine = document.getElementById("printedMachineBL").value;
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

        if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) != "Ошибка" && numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) != "Ошибка"){
            numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) > numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) ? numberOfPrintedSheets = numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", true) : numberOfPrintedSheets = numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", true);

        } else if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", false) == "Ошибка"){
            numberOfPrintedSheets = numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", true)
        }
        else if(numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "L", false) == "Ошибка") {
            numberOfPrintedSheets = numberProductPerSheetBL(widthPrintedArea, lengthPrintedArea, "W", true)
        } else {
            numberOfPrintedSheets = "Ошибка"
        }
    
    
    return numberOfPrintedSheets;
}


function getPrintedMachineBL(){
    var printedMachine = document.getElementById("printedMachineBL");
    var face = Number(document.getElementById('faceBL').value);
    var turnover = Number(document.getElementById('turnoverBL').value);
    var pantone = Number(document.getElementById('pantoneBL').value); 

    printedMachine.options.length = 0;
    var jsonPM = jsonObj["PrintingMachine"];
    var paperWeightValue = document.getElementById("paperWeightBL").value; //получаем value выбранного элемента option по ID элемента select 
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Буклеты</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
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
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBooklets" class="element text medium" type="number" min="0" oninput="getPaperFormatBooklets(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBooklets" class="element text medium" type="number" min="0" onchange="getPaperWeightBooklets()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBooklets" class="element text medium" type="number" min="0" oninput="getPaperWeightBooklets()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBooklets" class="element text medium" type="number" min="0" oninput="getPrintedMachineBooklets()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBooklets" name="paperWeightBooklets" onchange="getPaperWeightBooklets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBooklets" name="paperFormatBooklets" onchange="getPaperFormatBooklets(false)"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBooklets" name="printedMachineBooklets" onchange="calculateBooklets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBooklets" name="rentabilityBooklets" onchange="calculateBooklets()"></select>'
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
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input name="scoringBooklets" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemBooklets(this)"><span class="col-md-11" >Биговка</span> </label>'
html +=               '</div>'
html +=               '<div class="col-md-6">'
html +=                   '<input id="scoringBooklets" class=" element text medium" type="number" min="0" oninput="calculateBooklets()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                   '<label><input name="foldingBooklets" class="col-md-1 checkbox" checked type="checkbox" onchange="getStateElemBooklets(this)"><span>Фальцовка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="foldingBooklets" class="element text medium" type="number" min="0" oninput="calculateBooklets()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeBooklets"  name="laminadeBooklets" onchange="getLaminadeBooklets()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costBooklets" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label class="description">Количество резов на лист: <label id="checkBookletsCuts" ></label></label>'
html +=                 '<br/><label id="checkBookletsField" class="description"></label>'
html +=                 '<br/><label id="checkBooklets" class="description"></label>'
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
    var printedMachine = document.getElementById("printedMachineBooklets").value;
    var rentabilityId = Number(document.getElementById("rentabilityBooklets").value); 
    var turnoverElem = document.getElementById('turnoverBooklets');
    var cut = document.getElementById('checkBookletsCuts').textContent;
    var laminade = Number(document.getElementById('laminadeBooklets').value);
    var paperFormat = document.getElementById("paperFormatBooklets").value;
    var scoring = Number(document.getElementById('scoringBooklets').value);
    var folding = Number(document.getElementById('foldingBooklets').value);
    var varnishing = document.getElementById('varnishingBooklets').value;
    var paperWeightValue = document.getElementById("paperWeightBooklets").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceBooklets').value);
    var turnover = Number(document.getElementById('turnoverBooklets').value);
    var pantone = Number(document.getElementById('pantoneBooklets').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var checkLabel = "";
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsBooklets()+ "<br />";
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

    allCost += (printing * jsonPP.scoring * scoring);
    checkLabel +="Стоимость биговка: " + (printing * jsonPP.scoring * scoring).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.folding * folding);
    checkLabel +="Стоимость Фальцовка: " + (printing * jsonPP.folding * folding).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][laminade];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostBooklets.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
        if(elem.id == '0'){
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

                    if(formatBooklets != 3){
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
    

    if(formatBooklets != 3){
        
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Конверты вырубные</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingCuttingEnvelopes" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateCuttingEnvelopes()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatCuttingEnvelopes" name="formatCuttingEnvelopes" onchange="calculateCuttingEnvelopes()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperFormatCuttingEnvelopes(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperFormatCuttingEnvelopes(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperFormatCuttingEnvelopes(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperWeightCuttingEnvelopes()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPaperWeightCuttingEnvelopes()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="getPrintedMachineCuttingEnvelopes()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineCuttingEnvelopes" name="printedMachineCuttingEnvelopes" onchange="calculateCuttingEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label  class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<select id="varnishingCuttingEnvelopes" name="varnishingCuttingEnvelopes" onchange="getPrintedMachineCuttingEnvelopes()">'
html +=                     '<option value="0">Нет</option>'
html +=                     '<option value="1">Офсетный x1</option>'
html +=                     '<option value="3">УФ-лакировка x1</option>'
html +=                     '</select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityCuttingEnvelopes" name="rentabilityCuttingEnvelopes" onchange="calculateCuttingEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>' 
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownCuttingEnvelopes" name="cuttingDownCuttingEnvelopes" checked class="col-md-1 checkbox"  type="checkbox" onchange="calculateCuttingEnvelopes()"><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="stampCuttingEnvelopes" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemCuttingEnvelopes(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="stampCuttingEnvelopes" class="element text medium" type="number" min="0" oninput="calculateCuttingEnvelopes()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeCuttingEnvelopes"  name="laminadeCuttingEnvelopes" onchange="getLaminadeCuttingEnvelopes()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=         '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costCuttingEnvelopes" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label id="checkCuttingEnvelopesField" class="description"></label>'
html +=                 '<br/><label id="checkCuttingEnvelopes" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
cuttingEnvelopesContainer.innerHTML = html;     

function CuttingEnvelopes() {
    getCuttingEnvelopesFormat();
    getPaperWeightCuttingEnvelopes();
    getPrintedMachineCuttingEnvelopes();
    getRentabilityCuttingEnvelopes();
    getStateElemCuttingEnvelopes(true);
}

function calculateCuttingEnvelopes() {
    var finalCostCuttingEnvelopes = document.getElementById('final-costCuttingEnvelopes');
    var labelCheck = document.getElementById('checkCuttingEnvelopes');
    var printing = Number(document.getElementById('printingCuttingEnvelopes').value);
    var numberOfPrintedSheets = printing;
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes").value;
    var rentabilityId = Number(document.getElementById("rentabilityCuttingEnvelopes").value); 

    var formatCuttingEnvelopes = +document.getElementById("formatCuttingEnvelopes").value;
    var colorfulnessCuttingEnvelopes = Number(document.getElementById('colorfulnessCuttingEnvelopes').value);

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var face = 0;
    var turnover = 0;
    var laminade = 0;

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonE = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
    rentabilityPrice = jsonPMR.price;

   

    if(colorfulnessCuttingEnvelopes == 0){
        face = 4;
        turnover = 0;
    } else if(colorfulnessCuttingEnvelopes == 1){
        face = 2;
        turnover = 0;
    } else if(colorfulnessCuttingEnvelopes == 2){
        face = 1;
        turnover = 0;
    } 

    checkLabel += "Количесвто изделий на листе: " + printing + "<br />";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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
    printSpeedRatio = jsonC.printSpeedRatioCuttingEnvelopes;
    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) ;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations)  + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting  + chargingTime;  //время печати
        var date = new Date(null);
        date.setSeconds(printTime); // specify value for SECONDS here
        checkLabel +="Время печати с приладкой: " + date.getUTCHours() + " ч " + date.getMinutes() + " м " + date.getSeconds() + " сек" + "<br /><hr>";
    }

    

    checkLabel +="Стоимость работы в час: " + rentabilityPrice.toFixed(2) + "$" +  "<br />";

    var printingCost = (rentabilityPrice / 3600)  * printTime;
    checkLabel +="Стоимость печати: " + printingCost.toFixed(2) + "$" +  "<br />";

    var cuttingCuttingEnvelopesCost = printing * jsonE.price;
    checkLabel +="Стоимость конвертов: " + cuttingCuttingEnvelopesCost.toFixed(2) + "$" +  "<br />";
    
    var allCost = chemistryCost + formCost + printingCost + cuttingCuttingEnvelopesCost;

    
    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostCuttingEnvelopes.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
}

function getRentabilityCuttingEnvelopes() {
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes").value;
    var rentability = document.getElementById("rentabilityCuttingEnvelopes"); //получаем элемент зфтещтупо его ID
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

function getNumberOfCutsCuttingEnvelopes(numberWidth, numberLength, allowance){
    var cuts = document.getElementById('checkCuttingEnvelopesCuts');
    var numberOfCuts = 4;

    if(allowance==0){
        numberOfCuts += (numberWidth - 1) + (numberLength - 1);
    }
    else {
        numberOfCuts += (numberWidth - 1) * 2 + (numberLength - 1) * 2;
    }
    
    cuts.textContent = numberOfCuts;
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

function getLaminadeCuttingEnvelopes() {
    var laminade = document.getElementById("laminadeCuttingEnvelopes"); //получаем элемент по его ID
    if (laminade.options.length == 0){
        var jsonL = jsonObj["Laminade"]; 
        jsonL.forEach(function(elem) {
            laminade.options[laminade.options.length] = new Option(elem.name, elem.id);
        });
    }
    calculateCuttingEnvelopes();
}


function getCuttingEnvelopesFormat() {
    var formatCuttingEnvelopes = document.getElementById("formatCuttingEnvelopes");
    formatCuttingEnvelopes.options.length = 0;

    var jsonE = jsonObj["Paper"]["CuttingEnvelopes"];
    jsonE.forEach(function(elem) {  // id 0 = Ryobi 524, id 1 = Ryobi 522, id 2 = Ромайор
        if(elem.id == '0'){
            formatCuttingEnvelopes.options[formatCuttingEnvelopes.options.length] = new Option(elem.name, elem.id, true, true);
        } else {
            formatCuttingEnvelopes.options[formatCuttingEnvelopes.options.length] = new Option(elem.name, elem.id);
        }   
    });
}


function numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatCuttingEnvelopes = +document.getElementById('formatCuttingEnvelopes').value;
  
    var width = 0;
    var length = 0;
    var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
    width = jsonPCuttingEnvelopes.width;
    length = jsonPCuttingEnvelopes.length;
    

    
        
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

    getNumberOfCutsCuttingEnvelopes(Math.trunc(numberWidth), Math.trunc(numberLength))

    return numberProduct
}

function getPaperWeightCuttingEnvelopes() {
    var paperWeight = document.getElementById("paperWeightCuttingEnvelopes");
    var paperWeightValue = document.getElementById("paperWeightCuttingEnvelopes").value; //получаем value выбранного элемента option по ID элемента select 
    var paperTypeCuttingEnvelopes = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperWeightCuttingEnvelopes = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем тип бумаги


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
    
    getPrintedMachineCuttingEnvelopes();
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
        var allowance = Number(document.getElementById('allowanceCuttingEnvelopes').value);
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatCuttingEnvelopes != 5){
                        widthCuttingEnvelopes.disabled = true;
                        lengthCuttingEnvelopes.disabled = true;
                        
                        var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
                        width = jsonPCuttingEnvelopes.width;
                        length = jsonPCuttingEnvelopes.length;
                    }
                    else {
                        widthCuttingEnvelopes.disabled = false;
                        lengthCuttingEnvelopes.disabled = false;
                        
                        width = Number(document.getElementById('widthCuttingEnvelopes').value);
                        length = Number(document.getElementById('lengthCuttingEnvelopes').value);
                        
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

    
    
    getPrintedMachineCuttingEnvelopes();
    

}

function numberProductPerSheetCuttingEnvelopes(widthPrintedArea, lengthPrintedArea, position, dev){

    var formatCuttingEnvelopes = +document.getElementById('formatCuttingEnvelopes').value;
    var allowance = Number(document.getElementById('allowanceCuttingEnvelopes').value);
    var width = 0;
    var length = 0;

    if(formatCuttingEnvelopes != 5){
        
        var jsonPCuttingEnvelopes = jsonObj["Paper"]["CuttingEnvelopes"][formatCuttingEnvelopes];
        width = jsonPCuttingEnvelopes.width;
        length = jsonPCuttingEnvelopes.length;
    }
    else {

        width = Number(document.getElementById('widthCuttingEnvelopes').value);
        length = Number(document.getElementById('lengthCuttingEnvelopes').value);
        
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

    getNumberOfCutsCuttingEnvelopes(Math.trunc(numberWidth), Math.trunc(numberLength), allowance)

    return numberProduct
}


function getPrintedMachineCuttingEnvelopes(){
    var printedMachine = document.getElementById("printedMachineCuttingEnvelopes");
    var colorfulnessCuttingEnvelopes = Number(document.getElementById('colorfulnessCuttingEnvelopes').value);
    var face = 0;
    var turnover = 0;
    var pantone = 0;

    if(colorfulnessCuttingEnvelopes == 0){
        face = 4;
        turnover = 0;
        pantone = 0;
    } else if(colorfulnessCuttingEnvelopes == 1){
        face = 4;
        turnover = 0;
        pantone = 0;
    } else if(colorfulnessCuttingEnvelopes == 2){
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
    var paperWeightValue = document.getElementById("paperWeightCuttingEnvelopes").value; //получаем value выбранного элемента option по ID элемента select 
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
    
    calculateCuttingEnvelopes();
}
//бланки
var flyersContainer = document.getElementById("flyersContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12">'	
html +=         '<div class="col-md-12">'
html +=             '<h2>Листовки</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
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
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthFlyers" class="element text medium" type="number" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthFlyers" class="element text medium" type="number" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceFlyers" class="element text medium" type="number" min="0" oninput="getPaperFormatFlyers(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceFlyers" class="element text medium" type="number" min="0" oninput="getPaperWeightFlyers()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverFlyers" class="element text medium" type="number" min="0" oninput="getPaperWeightFlyers()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneFlyers" class="element text medium" type="number" min="0" oninput="getPrintedMachineFlyers()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightFlyers" name="paperWeightFlyers" onchange="getPaperWeightFlyers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatFlyers" name="paperFormatFlyers" onchange="getPaperFormatFlyers()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineFlyers" name="printedMachineFlyers" onchange="calculateFlyers()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityFlyers" name="rentabilityFlyers" onchange="calculateFlyers()"></select>'
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
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costFlyers" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label class="description">Количество резов на лист: <label id="checkFlyersCuts" ></label></label>'
html +=                 '<br/><label id="checkFlyersField" class="description"></label>'
html +=                 '<br/><label id="checkFlyers" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html += '</div>'
flyersContainer.innerHTML = html;     

function Flyers() {
    getFlyersFormat();
    getPaperWeightFlyers();
    getPrintedMachineFlyers();
    getPaperFormatFlyers();
    getRentabilityFlyers();
    getLaminadeFlyers();
    getStateElemFlyers(true);
}

function calculateFlyers() {
    var finalCostFlyers = document.getElementById('final-costFlyers');
    var labelCheck = document.getElementById('checkFlyers');
    var printing = Number(document.getElementById('printingFlyers').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsFlyers());
    var printedMachine = document.getElementById("printedMachineFlyers").value;
    var rentabilityId = Number(document.getElementById("rentabilityFlyers").value); 
    var turnoverElem = document.getElementById('turnoverFlyers');
    var laminade = Number(document.getElementById('laminadeFlyers').value);
    var paperFormat = document.getElementById("paperFormatFlyers").value;
    var cut = Number(document.getElementById('checkFlyersCuts').textContent);
    var varnishing = document.getElementById('varnishingFlyers').value;
    var paperWeightValue = document.getElementById("paperWeightFlyers").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceFlyers').value);
    var turnover = Number(document.getElementById('turnoverFlyers').value);
    var pantone = Number(document.getElementById('pantoneFlyers').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
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
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsFlyers()+ "<br />";
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

   
   

    var jsonL = jsonObj["Laminade"][laminade];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostFlyers.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
        if(elem.id == '0'){
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
        var allowance = Number(document.getElementById('allowanceFlyers').value);
        var width = 0;
        var length = 0;
        
        var numberOfPrintedSheets = 0;

        

        paperFormatId.forEach(function(formatId){ //проходимся по массиву formatID и находим какие id есть у каджого типа бумаги
            jsonPF.forEach(function(elem) { 
                if(formatId == elem.id){

                    if(formatFlyers != 5){
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

    if(formatFlyers != 5){
        
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Папки</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
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
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceFolders" class="element text medium" type="number" min="0" oninput="getPaperFormatFolders(false)" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceFolders" class="element text medium" type="number" min="0" oninput="getPaperWeightFolders()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverFolders" class="element text medium" type="number" min="0" oninput="getPaperWeightFolders()" max="4" value="1"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneFolders" class="element text medium" type="number" min="0" oninput="getPrintedMachineFolders()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightFolders" name="paperWeightFolders" onchange="getPaperWeightFolders()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatFolders" name="paperFormatFolders" onchange="getPaperFormatFolders()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineFolders" name="printedMachineFolders" onchange="calculateFolders()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityFolders" name="rentabilityFolders" onchange="calculateFolders()"></select>'
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
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownFolders" name="cuttingDownFolders" class="col-md-1 checkbox"  type="checkbox" onchange="calculateFolders()" checked><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="stampFolders" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElemFolders(this)"><span>Штамп</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="stampFolders" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminadeFolders"  name="laminadeFolders" onchange="getLaminadeFolders()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costFolders" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label id="checkFoldersField" class="description"></label>'
html +=                 '<br/><label id="checkFolders" class="description"></label>'
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
    var printedMachine = document.getElementById("printedMachineFolders").value;
    var rentabilityId = Number(document.getElementById("rentabilityFolders").value); 
    var turnoverElem = document.getElementById('turnoverFolders');
    var laminade = Number(document.getElementById('laminadeFolders').value);
    var paperFormat = document.getElementById("paperFormatFolders").value;

    var varnishing = document.getElementById('varnishingFolders').value;
    var paperWeightValue = document.getElementById("paperWeightFolders").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceFolders').value);
    var turnover = Number(document.getElementById('turnoverFolders').value);
    var pantone = Number(document.getElementById('pantoneFolders').value);

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
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
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsFolders()+ "<br />";
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
    var cutCost = numberOfPrintedSheets / jsonPM.ream * jsonPM.cutPrice;

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

   
   

    var jsonL = jsonObj["Laminade"][laminade];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostFolders.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
     

        var map = new Map();
        var widthPrintedArea = 0;
        var lengthPrintedArea = 0;
        var printing = Number(document.getElementById('printingFolders').value);
        var widthFolders = document.getElementById('widthFolders');
        var lengthFolders = document.getElementById('lengthFolders');
        var allowance = Number(document.getElementById('allowanceFolders').value);
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
    var paperWeightValue = document.getElementById("paperWeightFolders").value; //получаем value выбранного элемента option по ID элемента select 
    var paperTypeFolders = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperWeightFolders = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем тип бумаги
    var defcalc = paperWeight.getAttribute("defcalcFolders");
    if( paperWeight.options.length == 0 || face == 4 && turnover == 4 && defcalc == "false") {
        face == 4 && turnover == 4 ? paperWeight.options.length = 0 : "";
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Магниты</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
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
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12"></div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceMagnets" class="element text medium" type="number" min="0" oninput="getPaperFormatMagnets(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceMagnets" class="element text medium" type="number" min="0" oninput="getPaperWeightMagnets()"  max="4"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverMagnets" class="element text medium" type="number" min="0" oninput="getPaperWeightMagnets()" max="4" value="0"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneMagnets" class="element text medium" type="number" min="0" oninput="getPrintedMachineMagnets()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightMagnets" name="paperWeightMagnets" onchange="getPaperWeightMagnets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatMagnets" name="paperFormatMagnets" onchange="getPaperFormatMagnets()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineMagnets" name="printedMachineMagnets" onchange="calculateMagnets()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityMagnets" name="rentabilityMagnets" onchange="calculateMagnets()"></select>'
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
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input id="cuttingDownMagnets" name="cuttingDownMagnets" class="col-md-1 checkbox"  type="checkbox" onchange="calculateMagnets()"><span class="col-md-11" >Вырубка</span> </label>'
html +=                 '</div>'
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=         '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costMagnets" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label class="description col-md-12">Количество резов на лист: <label id="checkMagnetsCuts" ></label></label>'
html +=                 '<br/><label id="checkMagnetsField" class="description col-md-12"></label>'
html +=                 '<br/><label id="checkMagnets" class="description col-md-12"></label>'
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
    getStateElemMagnets(true);
}

function calculateMagnets() {
    var finalCostMagnets = document.getElementById('final-costMagnets');
    var labelCheck = document.getElementById('checkMagnets');
    var printing = Number(document.getElementById('printingMagnets').value);
    var paperFormat = +document.getElementById("paperFormatMagnets").value;
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProductsMagnets());
    var cut = Number(document.getElementById('checkMagnetsCuts').textContent);
    var numberOfPrintedVinylSheets = numberOfPrintedSheets;
    var printedMachine = document.getElementById("printedMachineMagnets").value;
    var rentabilityId = Number(document.getElementById("rentabilityMagnets").value); 
    var turnoverElem = document.getElementById('turnoverMagnets');
    
    

    var varnishing = document.getElementById('varnishingMagnets').value;
    var paperWeightValue = document.getElementById("paperWeightMagnets").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var face = Number(document.getElementById('faceMagnets').value);
    var turnover = Number(document.getElementById('turnoverMagnets').value);
    var pantone = Number(document.getElementById('pantoneMagnets').value);
    var cuttingDown = document.getElementById("cuttingDownMagnets");
    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonMV = jsonObj["Paper"]["MagneticVinyl"][0]
    var jsonC = jsonObj["Сoefficients"];
    var jsonCD = jsonObj["CuttingDown"];
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];

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

    jsonFP.some(function(elem) {
        if(numberOfPrintedSheets <= elem.before) { 
            numberOfFittingPaper = elem.numberPaper;
            return true;
        }
    });
    
    checkLabel += "Количесвто изделий на листе: " + getNumberOfProductsMagnets()+ "<br />";
    checkLabel += "Количество печатных листов: " + numberOfPrintedSheets + "<br /><hr>";

    checkLabel += "Количество листов винила: " + numberOfPrintedVinylSheets + "<br /><hr>";

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
    
    

    allCost += varnishingCost;
    checkLabel +="Стоимость УФ-лакировки: " + varnishingCost.toFixed(2) + "$" + "<br />";

    var jsonPast = jsonObj["Pasting"][pasting];
    allCost += (numberOfPrintedSheets * jsonPast.price );
    checkLabel +="Стоимость кашировки: " + (numberOfPrintedSheets * jsonPast.price ).toFixed(2) + "$" +  "<br />";


    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostMagnets.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
    var turnover = Number(document.getElementById('turnoverMagnets').value);
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Пакеты</h2>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingPackages" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePackages()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatPackages" name="formatPackages" onchange="calculatePackages()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Тип пакета</label>'			
html +=             '<div>'
html +=                 '<select id="typePackages" name="typePackages" onchange="calculatePackages()">'
html +=                     '<option value="0">Односторонний</option>'
html +=                     '<option value="1">Двухсторонний</option>'
html +=                     '<option value="2">Разные 2 стороны</option>'
html +=                 '</select>'
html +=             '</div> '
html +=         '</div>'
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
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightPackages" name="paperWeightPackages" onchange="getPaperWeightPackages()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachinePackages" name="printedMachinePackages" onchange="calculatePackages()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityPackages" name="rentabilityPackages" onchange="calculatePackages()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide padding-note">'
html +=             '<div class="col-md-4 padding-none">'				
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
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costPackages" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label class="description">Количество резов на лист: <label id="checkPackagesCuts" ></label></label>'
html +=                 '<br/><label id="checkPackagesField" class="description"></label>'
html +=                 '<br/><label id="checkPackages" class="description"></label>'
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
    var printedMachine = document.getElementById("printedMachinePackages").value;
    var rentabilityId = Number(document.getElementById("rentabilityPackages").value); 
    var turnoverElem = document.getElementById('turnoverPackages');
    
    var formatPackages = document.getElementById("formatPackages").value;
    var cut = Number(document.getElementById('checkPackagesCuts').textContent);
    var paperWeightValue = document.getElementById("paperWeightPackages").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; 
    var grommet = Number(document.getElementById('grommetPackages').value);
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

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonCPF = jsonObj["Paper"]["Format"][paperFormat];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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

    allCost += (printing * jsonPP.grommet *grommet);
    checkLabel +="Стоимость люверс: " + (printing * jsonPP.grommet * grommet).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][laminade];
    allCost += (numberOfPrintedSheets * jsonL.price );
    checkLabel +="Стоимость Ламинирования: " + (numberOfPrintedSheets * jsonL.price ).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostPackages.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
html +=         '<div class="col-md-12">'
html +=             '<h2>Конверты почтовые</h2>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingEnvelopes" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateEnvelopes()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatEnvelopes" name="formatEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Красочность</label>'			
html +=             '<div>'
html +=                 '<select id="colorfulnessEnvelopes" name="colorfulnessEnvelopes" onchange="getPrintedMachineEnvelopes()">'
html +=                     '<option value="0">4+0</option>'
html +=                     '<option value="1">2+0</option>'
html +=                     '<option value="2">1+0</option>'
html +=                 '</select>'
html +=             '</div> '
html +=         '</div>'		
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineEnvelopes" name="printedMachineEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityEnvelopes" name="rentabilityEnvelopes" onchange="calculateEnvelopes()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-costEnvelopes" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<br/><label id="checkEnvelopesField" class="description"></label>'
html +=                 '<br/><label id="checkEnvelopes" class="description"></label>'
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
    var printedMachine = document.getElementById("printedMachineEnvelopes").value;
    var rentabilityId = Number(document.getElementById("rentabilityEnvelopes").value); 

    var formatEnvelopes = +document.getElementById("formatEnvelopes").value;
    var colorfulnessEnvelopes = Number(document.getElementById('colorfulnessEnvelopes').value);

    var numberOfForms = 0;
    var numberOfFittingPaper = 0;
    var numberOfParts = 4;
    var numberOfFittingPaper = 0;
    var printSpeedRatio = 1;
    var face = 0;
    var turnover = 0;
    var laminade = 0;

    var jsonPM = jsonObj["PrintingMachine"][printedMachine];
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonE = jsonObj["Paper"]["Envelopes"][formatEnvelopes];
    var jsonC = jsonObj["Сoefficients"];
    var checkLabel = "";
    var jsonPP = jsonObj["PostpressProcessing"]; 
    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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

    checkLabel += "Количесвто изделий на листе: " + printing + "<br />";

    var jsonPMR = jsonObj["PrintingMachine"][printedMachine]["Rentability"][rentabilityId];
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
    checkLabel +="Скорость печати: " + (jsonPM.printSpeed * printSpeedRatio) + "<br />";

    if(jsonPM.printSpeed != 0){
        var iterations = Math.ceil(face / jsonPM.numberOfSections) + Math.ceil(turnover / jsonPM.numberOfSections) ;

        var chargingTime = (((allFittingPaper + numberOfPrintedSheets) / jsonPM.paperChargingTime) * iterations) * 60;
        var dateChanging = new Date(null);
        dateChanging.setSeconds(chargingTime); // specify value for SECONDS here
        checkLabel +="Время на зарядку бумаги: " + dateChanging.getUTCHours() + " ч " + dateChanging.getMinutes() + " м " + dateChanging.getSeconds() + " сек" + "<br />";

        var printTime1 = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio))  * 3600 ) * iterations)  + chargingTime;  //время печати
        var date1 = new Date(null);
        date1.setSeconds(printTime1); // specify value for SECONDS here
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

        var printTime = (((numberOfPrintedSheets / (jsonPM.printSpeed * printSpeedRatio)) * 3600) * iterations) + fitting  + chargingTime;  //время печати
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

    
    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";
    finalCostEnvelopes.innerHTML = "Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
    });
    
    
    calculateEnvelopes();
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
            getPaperFormat(true);   
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
        }
    }
}
request1.open('GET', requestURLDollar, true);
request1.responseType = 'json';
request1.send();

//универсальный калькулятор
var homeContainer = document.getElementById("homeContainer");
var html = '<div class="row">'
html +=     '<div class="col-md-12 ">'	
html +=         '<div class="col-md-12">'
html +=             '<h2>Универсальный калькулятор</h2>'
html +=         '</div> '
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printing" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="width" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="length" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowance" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Монтажей, шт </label>'
html +=             '<div>'
html +=                 '<input id="montage" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()" maxlength="255" value="1" step="0.5"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=             '<label class="description">Резов на печатный лист</label>'
html +=             '<div>'
html +=                 '<input id="cut" class="element text medium" type="number" min="0" oninput="setFlagOnInput()" flag="false" maxlength="255" /> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-4">'
html +=             '<label class="description ">Оборот</label><br/>'
html +=             '<div class="col-md-12 radio">'
html +=                 '<label class="col-md-6"><input name="rev" class="col-md-3 checkbox" id="anotherRev" type="radio" value="1" onchange="calculatePrintedField()" checked="checked"><span class="col-md-9">Чужой</span></label>'
html +=                 '<label class="col-md-6"><input name="rev" class="col-md-3 checkbox" id="ownRev" type="radio" value="2" onchange="calculatePrintedField()" > <span class="col-md-9">Свой</span></label>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-3">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="face" class="element text medium" type="number" min="0" oninput="getPrintedMachine()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnover" class="element text medium" type="number" min="0" oninput="getPrintedMachine()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-3">'	
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
html +=         '<div class="col-md-12">'
html +=             '<h3>Бумага</h3>'
html +=         '</div> '
html +=         '<div class="col-md-6">'
html +=             '<div>'
html +=                 '<select id="paperWeight" name="paperWeight" onchange="getPaperWeight()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-6">'
html +=             '<div>'
html +=                 '<select id="paperFormat" name="paperFormat" onchange="getPaperFormat()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Печатная машина (по умолчанию авто)</h3>'
html +=         '</div> '
html +=         '<div class="col-md-6">'	
html +=             '<div>'
html +=                 '<select id="printedMachine" name="printedMachine" onchange="calculatePrintedField()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-6">'
html +=             '<div>'
html +=                 '<select id="rentability" name="rentability" onchange="getRentability()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12 block">'				
html +=             '<h3 class="extremum-click">Послепечатная обработка<i class="fas fa-chevron-down arrow"></i></h3>'
html +=         '<div class="extremum-slide">'
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input name="scoring" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span class="col-md-11" >Биговка</span> </label>'
html +=               '</div>'
html +=               '<div class="col-md-6">'
html +=                   '<input id="scoring" class=" element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=              '<div class="col-md-6">'				
html +=                   '<label><input name="hole" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span class="col-md-11">Отверстие</span> </label>'
html +=               '</div>'
html +=              '<div class="col-md-6">'
html +=                   '<input id="hole" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=               '</div> '
html +=            '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=                '<div class="col-md-6">'				
html +=                    '<label><input name="grommet" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Люверс</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="grommet" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=              '</div> '
html +=            '</div> '
html +=            '<div class="col-md-12 padding-none">'
html +=              '<div class="col-md-6">'				
html +=                  '<label><input name="rounding" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Скругление</span> </label>'
html +=              '</div>'
html +=              '<div class="col-md-6">'
html +=                     '<input id="rounding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="brace" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Скобы</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="brace" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                   '<label><input name="folding" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Фальцовка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="folding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                    '<label><input name="compilation" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Подборка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="compilation" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="numiration" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Количество нумераций</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="numiration" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="insertSheetsInBlock" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"> <span>Вставка листов в блок, шт</span></label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="insertSheetsInBlock" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="gluingPVA" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Склейка ПВА</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="gluingPVA" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="cutting" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Надрезка за рез, м</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="cutting" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="glueGun" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Склейка пистолет, точек</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="glueGun" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="cuttingDown" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Вырубка</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="cuttingDown" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input name="scotch" class="col-md-1 checkbox"  type="checkbox" onchange="getStateElem(this)"><span>Cклейка скотч, см</span> </label>'
html +=                 '</div>'
html +=                 '<div class="col-md-6">'
html +=                     '<input id="scotch" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div> '
html +=             '<div class="col-md-12 padding-none">'
html +=                 '<div class="col-md-6">'				
html +=                     '<label><input id="buildPackage" class="col-md-1 checkbox"  type="checkbox" onchange="calculatePrintedField()"><span>Сборка пакетов</span> </label>'
html +=                 '</div>'
html +=             '</div> '
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Ламинат</label>'
html +=                 '<div>'
html +=                     '<select id="laminade"  name="laminade" onchange="getLaminade()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Термопереплёт</label>'
html +=                 '<div>'
html +=                     '<select id="thermalCover" name="thermalCover" onchange="getThermalCover()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-4">'				
html +=                 '<label class="description">Кашировка</label>'
html +=                 '<div>'
html +=                     '<select id="pasting" name="pasting" onchange="getPasting()"></select>'
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12">'	
html +=                 '<label class="col-md-12">Пружина</label>'			
html +=                 '<div class="col-md-6">'
html +=                     '<select style="margin:0px;" id="spring" name="spring" onchange="getSpring()"></select>'
html +=                 '</div> '
html +=                 '<div class="col-md-6">'
html +=                     '<input id="springNumber" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=                 '</div> '
html +=             '</div>'
html +=             '<div class="col-md-12"><br/></div>'	
html +=         '</div>'
html +=             '<div class="col-md-12"><br/></div>'
html +=     '</div>'
html += '</div>'
html +=         '<div class="col-md-12 final-cost-block">'
html +=             '<label id="final-cost" class="final-cost-description"></label><br/>'
html +=         '</div>'
html +=         '<div class="col-md-12">'	
html +=             '<div class="col-md-12 block">'				
html +=                 '<h3 class="extremum-click">Подробная информация<i class="fas fa-chevron-down arrow"></i></h3>'
html +=             '<div class="extremum-slide">'
html +=                 '<label id="check" class="description"></label>'
html +=             '</div><br/>'
html +=         '</div>'
html +=     '</div>'

homeContainer.innerHTML = html;     


var numInput = document.querySelectorAll('input');

// Listen for input event on numInput.
numInput.forEach(function(elem) {
    elem.addEventListener('input', function(){
        // Let match only digits.
        var num = this.value.match(/^\d+$/);
        if (num === null) {
            // If we have no match, value will be empty.
            this.value = "";
        }
    }, false)
});

function setFlagOnInput(){
    
    var cut = document.getElementById('cut');
    cut.setAttribute("flag", true);
    calculatePrintedField();
}


function calculatePrintedField() {
    var labelCheck = document.getElementById('check');
    var finalcost = document.getElementById('final-cost');
    var printing = Number(document.getElementById('printing').value);
    var paperFormat = document.getElementById('paperFormat').value; 
    var printedMachine = document.getElementById('printedMachine').value;
    var width = Number(document.getElementById('width').value);
    var length = Number(document.getElementById('length').value);
    var allowance = Number(document.getElementById('allowance').value);
    var cut = Number(document.getElementById('cut').value);
    var face = Number(document.getElementById('face').value);
    var turnover = Number(document.getElementById('turnover').value);
    var turnoverElem = document.getElementById('turnover');
    var pantone = Number(document.getElementById('pantone').value);
    var varnishing = document.getElementById('varnishing').value;
    var rev = document.querySelector('input[name=rev]:checked').value;
    var thermalCover = Number(document.getElementById('thermalCover').value);
    var gluingPVA = Number(document.getElementById("gluingPVA").value); 
    var rentabilityId = Number(document.getElementById("rentability").value); 
    var cuttingDown = document.querySelector('input[name=cuttingDown]');
    var cuttingDownVal = Number(document.getElementById('cuttingDown').value);
    var montage = Number(document.getElementById('montage').value);
    var scoring = Number(document.getElementById('scoring').value);
    var numiration = Number(document.getElementById('numiration').value);
    var hole = Number(document.getElementById('hole').value);
    var insertSheetsInBlock = Number(document.getElementById('insertSheetsInBlock').value);
    var grommet = Number(document.getElementById('grommet').value);
    var rounding = Number(document.getElementById('rounding').value);
    var compilation = Number(document.getElementById('compilation').value);
    var brace = Number(document.getElementById('brace').value);
    var folding = Number(document.getElementById('folding').value);
    var laminade = Number(document.getElementById('laminade').value);
    var cutting = Number(document.getElementById('cutting').value);
    var pasting = Number(document.getElementById("pasting").value);
    var buildPackage = document.getElementById('buildPackage');
    var spring = Number(document.getElementById('spring').value);
    var glueGun = Number(document.getElementById('glueGun').value);
    var scotch = Number(document.getElementById('scotch').value);
    var springNumber = Number(document.getElementById('springNumber').value);
    var paperWeightValue = document.getElementById("paperWeight").value; //получаем value выбранного элемента option по ID элемента select 
    var paperType = paperWeightValue.split("_")[0]; //из value выбранного элемента option получаем тип бумаги
    var paperTypeFormatId = paperWeightValue.split("_")[1]; //из value выбранного элемента option получаем ID форматов поддерживаемых выбранным типом бумаги
    var jsonP = jsonObj["Paper"][paperType][paperTypeFormatId]; //получаем необходимы тип бумаги по его ID
    
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
        
        if(elem.id == paperFormat){
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
        if(elem.id == printedMachine) { // для большей и меньшей стороны{}
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

    if(varnishing == "3"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500);
    } else if (varnishing == "4"){
        numberOfPrintedSheets <= 500 ? varnishingCost = jsonPP.UVVCostBefore500 * 2 : varnishingCost = (((numberOfPrintedSheets - 500) * jsonPP.UVVCostAfter500) + jsonPP.UVVCostBefore500) * 2;
    }
    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing)* montage;
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
        var iterations = Math.ceil(face / numberOfSections) + Math.ceil(turnover / numberOfSections) + varnishing;

        var chargingTime = (paperChargingTime * iterations);
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


    

    allCost += (printing * jsonPP.scoring * scoring);
    checkLabel +="Стоимость биговка: " + (printing * jsonPP.scoring * scoring).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.hole * hole);
    checkLabel +="Стоимость отверстие: " + (printing * jsonPP.hole * hole).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.grommet *grommet);
    checkLabel +="Стоимость люверс: " + (printing * jsonPP.grommet * grommet).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.rounding * rounding);
    checkLabel +="Стоимость скругление: " + (printing * jsonPP.rounding * rounding).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.brace * brace);
    checkLabel +="Стоимость Скоб: " + (printing * jsonPP.brace * brace).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.folding * folding);
    checkLabel +="Стоимость Фальцовка: " + (printing * jsonPP.folding * folding).toFixed(2) + "$" +  "<br />";
    allCost += (printing * jsonPP.compilation * compilation);
    checkLabel +="Стоимость Подборки: " + (printing * jsonPP.compilation * compilation).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.numberNumeration * numiration);
    checkLabel +="Стоимость Нумерации: " + (printing * jsonPP.numberNumeration * numiration).toFixed(2) + "$" +  "<br />";

    allCost += (gluingPVA > 250 ? jsonPP.gluingPVAMore250 * gluingPVA : jsonPP.gluingPVA * gluingPVA) ;
    checkLabel +="Стоимость Склейки ПВА: " + (gluingPVA > 250 ? jsonPP.gluingPVAMore250 * gluingPVA : jsonPP.gluingPVA * gluingPVA).toFixed(2) + "$" +  "<br />";

    var jsonTC = jsonObj["ThermalCover"][thermalCover];
    allCost += (printing * jsonTC.price );
    checkLabel +="Стоимость Термопереплёта: " + (printing * jsonTC.price ).toFixed(2) + "$" +  "<br />";

    var jsonL = jsonObj["Laminade"][laminade];
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

    var jsonG = jsonObj["Gluing"][0];
    allCost += (printing * glueGun * jsonG.glueGun)
    checkLabel +="Стоимость склейки Пистолет: " + (printing * glueGun * jsonG.glueGun).toFixed(2) + "$" +  "<br />";
    allCost += (printing * scotch * jsonG.scotch)
    checkLabel +="Стоимость склейки Скотч: " + (printing * scotch * jsonG.scotch).toFixed(2) + "$" +  "<br />";
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

    var jsonPast = jsonObj["Pasting"][pasting];
    allCost += (numberOfPrintedSheets * jsonPast.price );
    checkLabel +="Стоимость Кашировки: " + (numberOfPrintedSheets * jsonPast.price ).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.cutting * cutting);
    checkLabel +="Стоимость Надрезки: " + (printing * jsonPP.cutting * cutting).toFixed(2) + "$" +  "<br />";

    allCost += (printing * jsonPP.insertSheetsInBlock * insertSheetsInBlock);
    checkLabel +="Стоимость вставки листов в блок: " + (printing * jsonPP.insertSheetsInBlock * insertSheetsInBlock).toFixed(2) + "$" +  "<br />";


    checkLabel +="Курс доллара: " + (jsonObjDollar * jsonC.dollarCoeff).toFixed(2) + "/" + Number(jsonObjDollar).toFixed(2)  + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed(2) + " BYN" +  "<br />";

    finalcost.innerHTML ="Общая стоимость, руб: " + (allCost.toFixed(1) * (jsonObjDollar * jsonC.dollarCoeff)).toFixed(2) + " BYN" +  "<br />";

    if (numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "W", false) == numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) && numberProductPerSheet(widthPrintedArea, lengthPrintedArea, "L", false) == 0) {
        getPaperFormat(false)
    }

    labelCheck.innerHTML = checkLabel;

}

function getStateElem(elem){
    if(elem != true){
        var elemField = document.getElementById(elem.name);
        if(elem.checked) { 
            if(elem.name == "rounding") {
                elemField.disabled = false; elemField.value = 4;
            } else if(elem.name == "cuttingDown") {
                elemField.disabled = false; elemField.value = 4;
            } 
            else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculatePrintedField();
        if(elem.checked) { 
            if(elem.name == "cuttingDown") {
                elemField.disabled = false; elemField.value = numberOfPS;
            } 
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
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
