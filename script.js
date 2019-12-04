let spendingBlocT = document.getElementById('space_title_spendings');
let spendingBlocV = document.getElementById('space_value_spendings');
let incomesBlocT = document.getElementById('space_title_incomes');
let incomesBlocV = document.getElementById('space_value_incomes');
let savingBlocT = document.getElementById('space_title_saving');
let savingBlocV = document.getElementById('space_value_saving');
let btn = document.getElementById('btn');
let validate = document.getElementById('validate');
let selection = document.getElementById('select');
let blocIncome = document.getElementById('total_incomes');
let blocSpending = document.getElementById('total_spendings');
let blocSaving = document.getElementById('total_saving');
let x = document.getElementById('space_value_incomes').value;
let y = document.getElementById('space_value_spendings').value;
let z = document.getElementById('space_value_saving').value;
let result = document.getElementById('space_result');

spendings = 0;
incomes = 0;
saving = 0;
total=0;
rest=total+saving;

// x = all incomes
// y = all spendings
// z = all savings

selection.addEventListener('click', function () {
   beginAdd();
});

beginTap();
calculSpendings();

function beginTap() {
    let alert1 = prompt("Before utilisation, tap your mensually rents and charges juste here. (If it's a non decimal value, tap a point, not a virgule)");
    let alert2 = prompt("Next, tap your water, electricity and gas charges.(If it's a non decimal value, tap a point, not a virgule)");
    let alert3 = prompt("And tap your phone and internet charges, to conclude this part.(If it's a non decimal value, tap a point, not a virgule");

    document.getElementById('rent_value').innerHTML=alert1;
    document.getElementById('water_value').innerHTML=alert2;
    document.getElementById('phone_value').innerHTML=alert3;
    spendings = spendings+parseFloat(alert1)+parseFloat(alert2)+parseFloat(alert3);
}


function beginAdd() {
    let choice = selection.selectedIndex;
    let searched_value = selection.options[choice].value;
        if (searched_value === 'Spending') {
        document.getElementById('title_tap_spending').style.display='block';
        document.getElementById('title_tap_income').style.display='none';
        document.getElementById('title_tap_saving').style.display='none';
        document.getElementById('value_tap').style.display='block';
        document.getElementById('btn').style.display='block';
            document.getElementById('validate').style.display='block';
    } else if (searched_value === 'Income') {
            document.getElementById('title_tap_spending').style.display='none';
            document.getElementById('title_tap_income').style.display='block';
            document.getElementById('title_tap_saving').style.display='none';
            document.getElementById('value_tap').style.display='block';
            document.getElementById('btn').style.display='block';
            document.getElementById('validate').style.display='block';
        } else if (searched_value === 'Saving') {
            document.getElementById('title_tap_spending').style.display='none';
            document.getElementById('title_tap_income').style.display='none';
            document.getElementById('value_tap').style.display='block';
            document.getElementById('title_tap_saving').style.display='block';
            document.getElementById('btn').style.display='block';
            document.getElementById('validate').style.display='block';
        } else if (searched_value === 'none') {
            document.getElementById('title_tap_spending').style.display='none';
            document.getElementById('title_tap_income').style.display='none';
            document.getElementById('value_tap').style.display='none';
            document.getElementById('title_tap_saving').style.display='none';
            document.getElementById('btn').style.display='none';
            document.getElementById('validate').style.display='none';
        }
}


function addSpendings() {
    let divSpendingT = document.createElement('div');
    let divSpendingV = document.createElement('div');
    let title = document.getElementById('title_tap_spending').value;
    let value = document.getElementById('value_tap').value;


    divSpendingT.innerHTML=title;
    divSpendingT.className='col-sm';
    divSpendingV.innerHTML=value;
    divSpendingV.className='col-sm';

    spendingBlocT.appendChild(divSpendingT);
    spendingBlocV.appendChild(divSpendingV);
    spendings = spendings+parseFloat(value); {
        if(isNaN(value)) {
            value=0;
        }
    }
}

function addIncomes() {
    let divIncomeT = document.createElement('div');
    let divIncomeV = document.createElement('div');
    let title = document.getElementById('title_tap_income').value;
    let value = document.getElementById('value_tap').value;

    divIncomeT.innerHTML=title;
    divIncomeT.className='col-sm';
    divIncomeV.innerHTML=value;
    divIncomeV.className='col-sm';

    incomesBlocT.appendChild(divIncomeT);
    incomesBlocV.appendChild(divIncomeV);
    incomes = incomes+parseFloat(value); {
        if(isNaN(value)) {
            value=0;
        }
    }
}

function addSaving() {
    let divSavingT = document.createElement('div');
    let divSavingV = document.createElement('div');
    let title = document.getElementById('title_tap_saving').value;
    let value = document.getElementById('value_tap').value;

    divSavingT.innerHTML=title;
    divSavingT.className='col-sm';
    divSavingV.innerHTML=value;
    divSavingV.className='col-sm';

    savingBlocT.appendChild(divSavingT);
    savingBlocV.appendChild(divSavingV);
    saving = saving+parseFloat(value); {
        if(isNaN(value)) {
            value=0;
        }
    }
}

btn.addEventListener('click', function () {
    let choice = selection.selectedIndex;
    let searched_value = selection.options[choice].value;
    {
        if (searched_value === 'Income') {
            addIncomes();
            calculSpendings();
        } else if (searched_value === 'Spending') {
            addSpendings();
            calculSpendings();
        } else if (searched_value === 'Saving') {
            addSaving();
            calculSpendings();
        }
    }

});

validate.addEventListener('click', function () {
    document.getElementById('final').style.display='block';
    resultFinal();
});


function calculSpendings() {
    spendings;
    blocSpending.innerHTML=spendings;
    incomes;
    blocIncome.innerHTML=incomes;
    saving;
    blocSaving.innerHTML=saving;
    total=incomes-spendings;
    result.innerHTML=total;
}

function resultFinal() {
    total;
    {
        if (total === 0) {
            document.getElementById('title').innerHTML='Lucky guy';
            document.getElementById('title').style.color='#F5DEB3';
            document.getElementById('resume1').innerHTML=' hot ';
            document.getElementById('resume2').innerHTML=" take care of your account, one cent again, and it's over";
            document.getElementById('resume3').innerHTML= " worried";
            document.getElementById('resume4').innerHTML=" 0 ";
            document.getElementById('resume5').innerHTML=' hum ... nothing ';
            document.getElementById('resume6').innerHTML=" so don't be mad with it, idiot";
            document.getElementById('resume7').innerHTML="Hope you'll be more carefully next time, it's very important.";
            document.getElementById('resume8').innerHTML='See you soon, Lucky Guy !';
        } else if (total <= -1 && total >=-500) {
            document.getElementById('title').innerHTML='Bad manager';
            document.getElementById('title').style.color='#f5703c';
            document.getElementById('resume1').innerHTML=' bad ';
            document.getElementById('resume2').innerHTML=' stop alcohol and other';
            document.getElementById('resume3').innerHTML=' disappointed';
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" ... wait, no DON'T buy anithing ";
            document.getElementById('resume6').innerHTML=' and your to if you continue';
            document.getElementById('resume7').innerHTML="Hope you'll be less mad next time.";
            document.getElementById('resume8').innerHTML='See you soon ... or not.';
        } else if (total <= -501 && total >=-1000) {
            document.getElementById('title').innerHTML='Future hobo';
            document.getElementById('title').style.color='#e23614';
            document.getElementById('resume1').innerHTML=' horrible ';
            document.getElementById('resume2').innerHTML=' stop drugs, bitches and other fucking problem';
            document.getElementById('resume3').innerHTML=' crying';
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=' a pass to hell, you have a VIP entry';
            document.getElementById('resume6').innerHTML=' like your survival';
            document.getElementById('resume7').innerHTML="Hope you'll change of bank, we don't want to see you again.";
            document.getElementById('resume8').innerHTML='See you ... soon ... crap, change of bank, bro!';
        } else if (total <= -1001 && total >=-5000) {
            document.getElementById('title').innerHTML='Hobo';
            document.getElementById('title').style.color='#850100';
            document.getElementById('resume1').innerHTML=" dark ";
            document.getElementById('resume2').innerHTML=" search a bridge to get";
            document.getElementById('resume3').innerHTML=" sad";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" a box like Solid Snake to live in";
            document.getElementById('resume6').innerHTML=" but it'll be more longer when you'll be a hobo";
            document.getElementById('resume7').innerHTML="If I see you in the street, I'll throw you a coin.";
            document.getElementById('resume8').innerHTML="See you soon ... poor guy.";
        } else if (total < -5000) {
            document.getElementById('title').innerHTML='Dead man';
            document.getElementById('title').style.color='#630500';
            document.getElementById('resume1').innerHTML=' deadly ';
            document.getElementById('resume2').innerHTML=' change of country, and life';
            document.getElementById('resume3').innerHTML=' killed';
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=' ... kill yourself';
            document.getElementById('resume6').innerHTML=" you'll know it soon";
            document.getElementById('resume7').innerHTML="Hope you'll die in horrible sufferings.";
            document.getElementById('resume8').innerHTML="See you in hell, bitch!";
        } else if (total >= 1 && total <= 100) {
            document.getElementById('title').innerHTML='Cool guy';
            document.getElementById('title').style.color='#c8f5c7';
            document.getElementById('resume1').innerHTML=" good ";
            document.getElementById('resume2').innerHTML=" take care of your family and your life";
            document.getElementById('resume3').innerHTML=" happy";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" make pleasuree yourself a little";
            document.getElementById('resume6').innerHTML=" so taste it with moderation";
            document.getElementById('resume7').innerHTML="Hope we'll meet you again, my friend.";
            document.getElementById('resume8').innerHTML="See you soon in Maze Bank !";
        } else if (total >= 101 && total <= 1000) {
            document.getElementById('title').innerHTML='Good manager';
            document.getElementById('title').style.color='#cbf576';
            document.getElementById('resume1').innerHTML=" super";
            document.getElementById('resume2').innerHTML=" buy a new car or television";
            document.getElementById('resume3').innerHTML=" very happy";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" go in holiday with your family";
            document.getElementById('resume6').innerHTML=" so taste it a lot";
            document.getElementById('resume7').innerHTML="Hope you'll stay in Maze Bank, we're proud of you.";
            document.getElementById('resume8').innerHTML="See you soon !!";
        } else if (total >= 1001 && total <= 5001) {
            document.getElementById('title').innerHTML='Richy guy';
            document.getElementById('title').style.color='#aef56a';
            document.getElementById('resume1').innerHTML=" magnificent";
            document.getElementById('resume2').innerHTML=" sleep on your money";
            document.getElementById('resume3').innerHTML=" excited";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" buy a new house, or villa";
            document.getElementById('resume6').innerHTML=" not like your account";
            document.getElementById('resume7').innerHTML="Hope you'll make a donate to our bank.";
            document.getElementById('resume8').innerHTML="Peace, super client !";
        } else if (total >= 5001 && total <= 10000) {
            document.getElementById('title').innerHTML='Star of banks';
            document.getElementById('title').style.color='#66f500';
            document.getElementById('resume1').innerHTML=" perfect";
            document.getElementById('resume2').innerHTML=" quit your job if it's not done yet";
            document.getElementById('resume3').innerHTML=" impressed";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" buy a boat and some bitches on it";
            document.getElementById('resume6').innerHTML=" but you don't care, and I agree";
            document.getElementById('resume7').innerHTML="Hope you'll enjoy your life in the future.";
            document.getElementById('resume8').innerHTML="Long life to you, great client !";
        } else if (total > 10000) {
            document.getElementById('title').innerHTML='Golden boy';
            document.getElementById('title').style.color='#f5dc00';
            document.getElementById('resume1').innerHTML=" golden";
            document.getElementById('resume2').innerHTML=" buy our bank and make what you want with it";
            document.getElementById('resume3').innerHTML=" ... I don't have any words to describe the fact";
            document.getElementById('resume4').innerHTML= saving;
            document.getElementById('resume5').innerHTML=" do what you want in the whole world";
            document.getElementById('resume6').innerHTML=" ... fuck the life, you can do it";
            document.getElementById('resume7').innerHTML="Hope you'll invit me in a yacht party and we'll can have a great time with bitches.";
            document.getElementById('resume8').innerHTML="God doesn't exist ... just Golden Boy !";
        }
    } document.getElementById('money_saved').innerHTML=saving; {
        total;
        if (total >= 0) {
            document.getElementById('balance').innerHTML='Positive'.
            document.getElementById('balance').style.color="red";
        } else if (total < 0) {
            document.getElementById('balance').innerHTML='Negative'.
            document.getElementById('balance').style.color="green";
        }
    }
}