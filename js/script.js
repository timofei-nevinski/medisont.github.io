//бирдекели
var bierdequelContainer = document.getElementById("bierdequelContainer");
var html = '<div class="row ">'
html +=     '<div class="col-md-8">'	
html +=     '<div class="col-md-12">'
html +=         '<h2>Бирдекели</h2>'
html +=     '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingB" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBierdequels()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Размер изделия</h3>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<div>'
html +=                 '<p><input name="sizeB" type="radio" value="0" onchange="getPaperFormatB(false)" checked="checked"> 90x90 квадрат</p>'
html +=                 '<p><input name="sizeB" type="radio" value="1" onchange="getPaperFormatB(false)"> 90х90 круг</p>'
html +=                 '<p><input name="sizeB" type="radio" value="2" onchange="getPaperFormatB(false)"> 100х100 круг</p>'
html +=                 '<p><input name="sizeB" type="radio" value="3" onchange="getPaperFormatB(false)"> Х х У другой</p>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255"  value="100" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="100"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceB" class="element text medium" type="number" min="0" oninput="getPaperFormatB(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '
html +=         '<div class="col-md-6">'
html +=             '<div class="col-md-12">'
html +=                 '<h3>1-сторона</h3>'
html +=             '</div> '
html +=             '<div class="col-md-12">'				
html +=                 '<div>'
html +=                     '<p><input name="side1" type="radio" value="0" onchange="calculateBierdequels()" checked="checked"> 4 + ламинация Глянцевая</p>'
html +=                     '<p><input name="side1" type="radio" value="1" onchange="calculateBierdequels()">  4 + ламинация Матовая</p>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-6">'	
html +=             '<div class="col-md-12">'
html +=              '<h3>2-сторона</h3>'
html +=             '</div> '
html +=             '<div class="col-md-12">'				
html +=                 '<div>'
html +=                     '<p><input name="side2" type="radio" value="0" onchange="getPastingB()" > 4 + ламинация Глянцевая</p>'
html +=                     '<p><input name="side2" type="radio" value="1" onchange="getPastingB()">  4 + ламинация Матовая</p>'
html +=                     '<p><input name="side2" type="radio" value="2" onchange="getPastingB()"> Белый + ламинация Глянцевая</p>'
html +=                     '<p><input name="side2" type="radio" value="3" onchange="getPastingB()">  Белый + ламинация Матовая</p>'
html +=                     '<p><input name="side2" type="radio" value="4" onchange="getPastingB()" checked="checked"> Ничего</p>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightB" name="paperWeight" onchange="getPaperWeightB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatB" name="paperFormat" onchange="getPaperFormatB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineB" name="printedMachine" onchange="calculateBierdequels() "></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityB" name="rentability" onchange="getRentabilityB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<h3>Послепечатная обработка</h3>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input id="cuttingDown" type="checkbox" onchange="calculateBierdequels() " checked> Вырубка</p>'
html +=             '</div>'
html +=         '</div> '
html +=         '<div class="col-md-12">'				
html +=             '<label class="description">Кашировка</label>'
html +=             '<div>'
html +=                 '<select id="pastingB" name="pasting" onchange="getPastingB()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<br/><input type="button" value="Сбросить" onClick="window.location.reload()"><br/>'
html +=         '</div> '
html +=     '</div>'
html +=     '<div class="col-md-4">'
html +=         '<div class="col-md-12">'
html +=             '<br/><label id="checkB" class="description"></label>'
html +=         '</div>'
html +=     '</div>'
html += '</div>'
bierdequelContainer.innerHTML = html;     


 

function calculateBierdequels() {
    var labelCheck = document.getElementById('checkB');
    var printing = Number(document.getElementById('printingB').value);
    var numberOfPrintedSheets = Math.ceil(printing / getBierdequelsFormat());
    var printedMachine = document.getElementById("printedMachineB").value;
    var rentabilityId = Number(document.getElementById("rentabilityB").value); 
    var side1 = document.querySelector('input[name=side1]:checked').value;
    var cuttingDown = document.getElementById("cuttingDown");
    var side2 = document.querySelector('input[name=side2]:checked').value;
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
    checkLabel +="Стоимость химии: " + chemistryCost + "$" +  "<br />";

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


    labelCheck.innerHTML = checkLabel;
}

function getPastingB() {
    var pasting = document.getElementById('pastingB');
    var side2 = document.querySelector('input[name=side2]:checked').value;
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
    var paperWeightValue = document.getElementById("paperWeight").value; //получаем value выбранного элемента option по ID элемента select 
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
    var sizeB = document.querySelector('input[name=sizeB]:checked').value;
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
    var sizeB = document.querySelector('input[name=sizeB]:checked').value;
    
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
html +=     '<div class="col-md-8">'	
html +=         '<div class="col-md-12">'
html +=             '<h2>Бланки</h2>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printingBL" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculateBlanks()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Размер изделия</h3>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Формат</label>'
html +=             '<div>'
html +=                 '<select id="formatBL" name="formatBL" onchange="getPaperFormatBL(false)"></select>'
html +=             '</div> '
html +=         '</div>'	
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="widthBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="lengthBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowanceBL" class="element text medium" type="number" min="0" oninput="getPaperFormatBL(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="faceBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnoverBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantoneBL" class="element text medium" type="number" min="0" oninput="getPrintedMachineBL()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeightBL" name="paperWeightBL" onchange="getPaperWeightBL()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormatBL" name="paperFormatBL" onchange="getPaperFormatBL()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachineBL" name="printedMachineBL" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentabilityBL" name="rentabilityBL" onchange="calculateBlanks()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<h3>Послепечатная обработка</h3>'
html +=         '</div>'
html +=         '<div class="col-md-6">'
html +=             '<div class="col-md-12">'
html +=                 '<h4>Нумерация</h4>'
html +=             '</div> '
html +=             '<div class="col-md-12">'				
html +=                 '<div>'
html +=                     '<p><input name="numeration" type="radio" value="0" onchange="calculateBlanks()" checked="checked"> Нет</p>'
html +=                     '<p><input name="numeration" type="radio" value="1" onchange="calculateBlanks()"> x1</p>'
html +=                     '<p><input name="numeration" type="radio" value="2" onchange="calculateBlanks()">  x2</p>'
html +=                 '</div> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<br/><input type="button" value="Сбросить" onClick="window.location.reload()"><br/>'
html +=         '</div> '
html +=     '</div>'
html +=     '<div class="col-md-4">'
html +=         '<div class="col-md-12">'
html +=             '<br/><label id="checkBL" class="description"></label>'
html +=         '</div>'
html +=     '</div>'
html += '</div>'
blanksContainer.innerHTML = html;     

function calculateBlanks() {
    var labelCheck = document.getElementById('checkBL');
    var printing = Number(document.getElementById('printingBL').value);
    var numberOfPrintedSheets = Math.ceil(printing / getNumberOfProducts());
    var printedMachine = document.getElementById("printedMachineBL").value;
    var rentabilityId = Number(document.getElementById("rentabilityBL").value); 
    var turnoverElem = document.getElementById('turnoverBL');
    var paperFormat = document.getElementById("paperFormatBL").value;
    var numeration = document.querySelector('input[name=numeration]:checked').value;
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
    checkLabel +="Стоимость химии: " + chemistryCost + "$" +  "<br />";

    checkLabel +="Привертка: " + jsonPM.ream +  "<br />";
    checkLabel +="Цена одного реза: " + jsonPM.cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / jsonPM.ream * jsonPM.cutPrice;

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

    var paperWeight = (paperWidth / 1000) * (paperLength / 1000)  * (jsonP.weight / 1000) * allPaper
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

    allCost += (printing * jsonPP.numeration * numeration);
    checkLabel +="Стоимость нумерации: " + (printing * jsonPP.numeration * numeration).toFixed(2) + "$" +  "<br />";

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

    labelCheck.innerHTML = checkLabel;
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
    var allowance = Number(document.getElementById('allowanceB').value);
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

var jsonObj = "";
var requestURL = 'https://medisont.github.io/data/variables.json';
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        request.onload = function() { 
            jsonObj = request.response; 
            getBlanksFormat();
            getPaperWeight();
            getPaperWeightB();
            getPaperWeightBL();
            getPrintedMachine();
            getPrintedMachineB();
            getPrintedMachineBL();
            getPaperFormat(true);
            getPaperFormatB();
            getPaperFormatBL();
            getRentability();
            getRentabilityB();
            getRentabilityBL();
            getStateElem(true);
            getLaminade();
            getPasting();
            getPastingB();
            getSpring();
            getThermalCover();
            getBierdequelsFormat();
        }
    }
}
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

var jsonObjDollar = "";
var requestURLDollar = 'https://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2';
var request1 = new XMLHttpRequest();

request1.onreadystatechange = function() {
    if (request1.status == 200) {
        request1.onload = function() { 
            jsonObjDollar = request1.response.Cur_OfficialRate; 
            calculatePrintedField();
            calculateBierdequels();
            calculateBlanks(); 
        }
    }
}
request1.open('GET', requestURLDollar, true);
request1.responseType = 'json';
request1.send();

//универсальный калькулятор
var homeContainer = document.getElementById("homeContainer");
var html = '<div class="row ">'
html +=     '<div class="col-md-8">'	
html +=         '<div class="col-md-12">'
html +=             '<h2>Универсальный калькулятор</h2>'
html +=         '</div> '
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Тираж, шт </label>'
html +=             '<div>'
html +=                 '<input id="printing" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()"  maxlength="255"  value="1000"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Монтажей, шт </label>'
html +=             '<div>'
html +=                 '<input id="montage" class="element text medium" type="number" pattern="\d+" min="0" oninput="calculatePrintedField()" maxlength="255" value="1" step="0.5"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Резов на печатный лист</label>'
html +=             '<div>'
html +=                 '<input id="cut" class="element text medium" type="number" min="0" oninput="calculatePrintedField()" maxlength="255" value="6"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Размер изделия</h3>'
html +=         '</div> '	
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Ширина, мм </label>'
html +=             '<div>'
html +=                 '<input id="width" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255"  value="210" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Длинна, мм </label>'
html +=             '<div>'
html +=                 '<input id="length" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="297"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Припуски, мм </label>'
html +=             '<div>'
html +=                 '<input id="allowance" class="element text medium" type="number" min="0" oninput="getPaperFormat(false)" maxlength="255" value="2"/> '
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<h3>Красочность</h3>'
html +=         '</div> '		
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Лицо</label>'
html +=             '<div>'
html +=                 '<input id="face" class="element text medium" type="number" min="0" oninput="getPrintedMachine()"  maxlength="255"  value="4" /> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Оборот</label>'
html +=             '<div>'
html +=                 '<input id="turnover" class="element text medium" type="number" min="0" oninput="getPrintedMachine()" maxlength="255" value="4"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Пантонов</label>'
html +=             '<div>'
html +=                 '<input id="pantone" class="element text medium" type="number" min="0" oninput="getPrintedMachine()" maxlength="255" value="0"/> '
html +=             '</div>'
html +=         '</div>'	
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Лакировка</label>'
html +=             '<div>'
html +=                 '<p><input name="varnishing" type="radio" value="NO" onchange="getPrintedMachine()" checked="checked">Нет</p>'
html +=                 '<p><input name="varnishing" type="radio" value="1" onchange="getPrintedMachine()">Офсетный х1</p>'
html +=                 '<p><input name="varnishing" type="radio" value="2" onchange="getPrintedMachine()">Офсетный х2</p>'
html +=                 '<p><input name="varnishing" type="radio" value="UVV" onchange="getPrintedMachine()">УФ-лакировка</p>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'				
html +=             '<label class="description">Бумага</label>'
html +=             '<div>'
html +=                 '<select id="paperWeight" name="paperWeight" onchange="getPaperWeight()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=         '<label class="description">Размер бумаги</label>'
html +=             '<div>'
html +=                 '<select id="paperFormat" name="paperFormat" onchange="getPaperFormat()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'	
html +=             '<label class="description">Печатная машина</label>'
html +=             '<div>'
html +=                 '<select id="printedMachine" name="printedMachine" onchange="calculatePrintedField()"></select>'
html +=             '</div>'
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Рентабельность</label>'
html +=             '<div>'
html +=                 '<select id="rentability" name="rentability" onchange="getRentability()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-4">'
html +=             '<label class="description">Оборот</label><br/>'
html +=             '<div style="display:inline-flex">'
html +=                 '<p><input name="rev" id="anotherRev" type="radio" value="1" onchange="calculatePrintedField()" checked="checked">Чужой</p>&nbsp;&nbsp;&nbsp;'
html +=                 '<p><input name="rev" id="ownRev" type="radio" value="2" onchange="calculatePrintedField()" >Свой</p>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<h3>Послепечатная обработка</h3>'
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="scoring" type="checkbox" onchange="getStateElem(this)"> Биговка</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="scoring" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="hole" type="checkbox" onchange="getStateElem(this)"> Отверстие</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="hole" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="grommet" type="checkbox" onchange="getStateElem(this)"> Люверс</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="grommet" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="rounding" type="checkbox" onchange="getStateElem(this)"> Скругление</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="rounding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="brace" type="checkbox" onchange="getStateElem(this)"> Скобы</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="brace" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="folding" type="checkbox" onchange="getStateElem(this)"> Фальцовка</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="folding" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="compilation" type="checkbox" onchange="getStateElem(this)"> Подборка</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="compilation" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="insertSheetsInBlock" type="checkbox" onchange="getStateElem(this)"> Вставка листов в блок, шт</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="insertSheetsInBlock" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="gluingPVA" type="checkbox" onchange="getStateElem(this)"> Склейка ПВА</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="gluingPVA" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="cutting" type="checkbox" onchange="getStateElem(this)"> Надрезка за рез, м</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="cutting" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="glueGun" type="checkbox" onchange="getStateElem(this)"> Склейка пистолет, точек</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="glueGun" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input name="scotch" type="checkbox" onchange="getStateElem(this)"> Cклейка скотч, см</p>'
html +=             '</div>'
html +=             '<div class="col-md-4">'
html +=                 '<input id="scotch" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div> '
html +=         '<div class="col-md-12">'
html +=             '<div class="col-md-4">'				
html +=                 '<p><input id="buildPackage" type="checkbox" onchange="calculatePrintedField()"> Сборка пакетов</p>'
html +=             '</div>'
html +=         '</div> '
html +=         '<div class="col-md-12">'				
html +=             '<label class="description">Ламинат</label>'
html +=             '<div>'
html +=                 '<select id="laminade" name="laminade" onchange="getLaminade()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<label class="description">Термопереплёт</label>'
html +=             '<div>'
html +=                 '<select id="thermalCover" name="thermalCover" onchange="getThermalCover()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<div class="col-md-4" style="padding-left:0px;">'
html +=                 '<label class="description">Пружина</label><br/>'
html +=                 '<select id="spring" name="spring" onchange="getSpring()"></select>'
html +=             '</div> '
html +=             '<div class="col-md-4"><br/>'
html +=                 '<input id="springNumber" class="element text medium" type="number" min="0" oninput="calculatePrintedField()"  maxlength="255" value="0" disabled="true"/> '
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'				
html +=             '<label class="description">Кашировка</label>'
html +=             '<div>'
html +=                 '<select id="pasting" name="pasting" onchange="getPasting()"></select>'
html +=             '</div> '
html +=         '</div>'
html +=         '<div class="col-md-12">'
html +=             '<br/><input type="button" value="Сбросить" onClick="window.location.reload()"><br/>'
html +=         '</div> '
html +=     '</div>'
html +=     '<div class="col-md-4">'
html +=         '<div class="col-md-12">'
html +=             '<br/><label id="check" class="description"></label>'
html +=         '</div>'
html +=     '</div>'
html += '</div>'
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


function calculatePrintedField() {
    var labelCheck = document.getElementById('check');
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
    var varnishing = document.querySelector('input[name=varnishing]:checked').value;
    var rev = document.querySelector('input[name=rev]:checked').value;
    var thermalCover = Number(document.getElementById('thermalCover').value);
    var gluingPVA = Number(document.getElementById("gluingPVA").value); 
    var rentabilityId = Number(document.getElementById("rentability").value); 
    var montage = Number(document.getElementById('montage').value);
    var scoring = Number(document.getElementById('scoring').value);
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
    var coefficientIfSmallPrinting = 0;
    width = width + (allowance * 2) // прибавляем припуски
    length = length + (allowance * 2)

    var widthPrintedArea = 0;
    var lengthPrintedArea = 0;
    var checkLabel = "";
    var jsonFP = jsonObj["Paper"]["FittingPager"];
    var jsonC = jsonObj["Сoefficients"];
    var jsonCPF = jsonObj["Paper"]["Format"];
    
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
                if (width == length && width >= 200 && width <= 220){
                    widthPrintedArea = (elem.width / 3) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 6 части<br />";
                    numberOfParts = 6;
                } else if (width >= 200 && width <= 220 && length >= 400 && length <= 500){
                    widthPrintedArea = (elem.width / 3) - 2; 
                    lengthPrintedArea = (elem.length / 2) -2;
                    checkLabel += "Режем на 6 части<br />";
                    numberOfParts = 6;
                } else if (length >= 200 && length <= 220 && width >= 400 && width <= 500) {
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

    var numberOfFittingPaper = 0;
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
    checkLabel +="Стоимость химии: " + chemistryCost + "$" +  "<br />";

    checkLabel +="Привертка: " + ream +  "<br />";
    checkLabel +="Цена одного реза: " + cutPrice + "$" +  "<br />";
    var cutCost = numberOfPrintedSheets / ream * cut * cutPrice;

    if(cutCost < jsonC.minCutPrice){
        cutCost = jsonC.minCutPrice;
    }
    checkLabel +="Стоимость резки: " + cutCost + "$" +  "<br />";

    varnishing == "1" || varnishing == "2" ? varnishing = Number(varnishing) : varnishing = 0
    numberOfForms = (face + turnover + varnishing) * montage;
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
        checkLabel +="Время печати без приладки: " + date1.getUTCHours() + " ч " + date1.getMinutes() + " м " + date1.getSeconds() + " сек" + "<br />";

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

    var jsonPP = jsonObj["PostpressProcessing"]; 
    var allCost = chemistryCost + cutCost + formCost + printingCost + paperCost;

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

    checkLabel +="Общая стоимость: " + allCost.toFixed(2) + "$" +  "<br />";

 
    checkLabel +="Общая стоимость, руб: " + (allCost.toFixed(1) * jsonObjDollar).toFixed(2) + " BYN" +  "<br />";

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
            } else {
                elemField.disabled = false; elemField.value = 1;
            }
        } else {
            elemField.disabled = true; elemField.value = 0;
        }
        calculatePrintedField();
    }
}

function getRev(numberOfProduct){
    var rev = document.querySelector('input[name=rev]:checked').value;
    var ownRev = document.getElementById('ownRev');
    var ownRevChecked = ownRev.checked;
    var anotherRev = document.getElementById('anotherRev');
    var face = Number(document.getElementById('face').value);
    var turnover = Number(document.getElementById('turnover').value);
    var varnishing = document.querySelector('input[name=varnishing]:checked').value;
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
    var varnishing = document.querySelector('input[name=varnishing]:checked').value;
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
