
/**
 * The documentation in this file explains most of the code 
 * or at least what i felt needs explanation
 */
$(document).ready(function () {
    // Inititalzing varibales using Jquery
    var tableElement = $('.tests-list li');
    var testList = $('.tests-list');
    var mcqQuestions = $('#mcq-1');
    var dropDowns = $('.dropdown');
    var dropDown1 = dropDowns.eq(0);
    var dropDown2 = dropDowns.eq(1);
    var prompt = $("#prompt");
    var infoForm = $('#info');
    var btnBack = $('#btn-back');
    var btnNext = $('#btn-next');
    var etName = $('#name');
    var attempts = $('.attempts');
    var background = ('#background');
    var canvas1 = $('#chart1');
    var canvas2 = $('#chart2');
    var divFinalResult = $('#final-result');
    var lblPoints = $('#points');
    var lblScore = $("#score");
    var tableReport = $('#report');
    var etID = $('#id');
    var etEmail = $('#email');
    var checkboxes = $('input[type="checkbox"]');
    var current = testList;
    var timeEnded = false;
    var mcqLimit = 1;
    var ddq1AttemptsCnt = 5;
    var ddq2AttemptsCnt = 5;






    /*
    This class is to hold the checkbox options chosen by the user.
        It is used later to save and load the answers.
     */
    class FourCheckboxMemory {
        constructor() {
            this.checkbox1 = false;
            this.checkbox2 = false;
            this.checkbox3 = false;
            this.checkbox4 = false;
        }
    }


    /*
    KFUPM Loyality Questions 
    */
    var loyality_DDQ1 = {
        p: '<p>Mohammed<span id="q1s1"></span>is the president of<span id="q1s2"></span></p>',
        choice1: "KSU",
        choice2: "Trump",
        choice3: "KFUPM",
        choice4: "Al-Saqqaf",
        answer1: "Al-Saqqaf",
        answer2: "KFUPM",
        commutatve: false
    };

    var loyality_DDQ2 = {
        p: '<p><span id="q2s1"></span> and  <span id="q2s2"></span> are used for server side scripting</p>',
        choice1: "Javascript",
        choice2: "PHP",
        choice3: "CSS",
        choice4: "Jquery",
        answer1: "Javascript",
        answer2: "Jquery",
        commutatve: true
    };

    var loyality_MCQ1 = {
        question: "What does the logo shown in the page represent?",
        choice1: "Saudi Arabia",
        choice2: "KFUPM",
        choice3: "USA",
        choice4: "KSU",
        answer: 2
    };
    var loyality_MCQ2 = {
        question: "What is the name of KFUPM's  current president",
        choice1: "Ali Al-ALi",
        choice2: "Khalid Al-Sultan",
        choice3: "Muhammed Al-Saqaf",
        choice4: "Jon Doe",
        answer: 3
    };
    var loyality_MCQ3 = {
        question: "When was KFUPM founded",
        choice1: "1950",
        choice2: "1940",
        choice3: "1933",
        choice4: "1963",
        answer: 4

    };
    var loyality_MCQ4 = {
        question: "Who of the following was a previous presedent of KFUPM",
        choice1: "Ali Al-ALi",
        choice2: "Khalid Al-Sultan",
        choice3: "Muhammed Al-Saqaf",
        choice4: "Jon Doe",
        answer: 2
    };

    var loyality_MCQ5 = {
        question: "What is your name ?",
        choice1: "Abdullah Barnawi",
        choice2: "Jon Doe",
        choice3: "Ali Al-Ali",
        choice4: "Saleh Al-Saleh",
        answer: 1
    };


    var loyality_MMCQ1 = {
        question: "Which of the following is a Major in KFUPM",
        choice1: "Data Science and Engineering",
        choice2: "Computer Sceince",
        choice3: "Computer Engineering",
        choice4: "Software Engineering",
        answer1: 2,
        answer2: 3,
        answer3: 4
    };
    var loyality_MMCQ2 = {
        question: "Which of the following are courses in KFUPM",
        choice1: "ICS102",
        choice2: "ICS201",
        choice3: "ICS202",
        choice4: "ICS333",
        answer1: 1,
        answer2: 2,
        answer3: 3
    };
    var loyality_MMCQ3 = {
        question: "Which of the following are not courses in KFUPM",
        choice1: "Data Science",
        choice2: "Web Development",
        choice3: "Backend Development",
        choice4: "Android Development",
        answer1: 1,
        answer2: 3,
        answer3: 4
    };
/////////////////////////////////////////////////////////////////////////////////////
    var math_DDQ1 = {
        p: '<p>10 + <span  id="q1s1"></span> = <span id="q1s2"></span></p>',
        choice1: "100",
        choice2: "111",
        choice3: "90",
        choice4: "5",
        answer1: "90",
        answer2: "100",
        commutatve: false
    };

    var math_DDQ2 = {
        p: '<p><span id="q2s1"></span> * <span id="q2s2"></span>  = 123456</p>',
        choice1: "2052",
        choice2: "3",
        choice3: "121",
        choice4: "41152",
        answer1: "3",
        answer2: "41152",
        commutatve: true
    };

    /*
    Simple Math Questions 
    */
    var math_MCQ1 = {
        question: "What number you cant devide 8 by",
        choice1: "8",
        choice2: "4",
        choice3: "2",
        choice4: "3",
        answer: 4
    };
    var math_MCQ2 = {
        question: "If you cube 8 then mulitply it by half the reulst the answer is?",
        choice1: "2^17",
        choice2: "2^16",
        choice3: "2^15",
        choice4: "2^14",
        answer: 1
    };
    var math_MCQ3 = {
        question: "1 + 2 *3 / 4 =",
        choice1: "2.25",
        choice2: "2.5",
        choice3: "2.3",
        choice4: "1.75",
        answer: 2

    };
    var math_MCQ4 = {
        question: "0.000001 in scientific notation is equal to :",
        choice1: "0",
        choice2: "wrong quesiton and there is no possible answer",
        choice3: "1x10^-6",
        choice4: "all choices are wrong",
        answer: 3
    };

    var math_MCQ5 = {
        question: "What is your name ?",
        choice1: "Abdullah Barnawi",
        choice2: "Jon Doe",
        choice3: "Ali Al-Ali",
        choice4: "Saleh Al-Saleh",
        answer: 1
    };


    var math_MMCQ1 = {
        question: "which of the following is divisble by 3",
        choice1: "140856",
        choice2: "1389726",
        choice3: "13897283",
        choice4: "3",
        answer1: 1,
        answer2: 2,
        answer3: 4
    };
    var math_MMCQ2 = {
        question: "which of the following is a prime number",
        choice1: "7",
        choice2: "11",
        choice3: "1201",
        choice4: "1203",
        answer1: 1,
        answer2: 2,
        answer3: 3
    };
    var math_MMCQ3 = {
        question: "Which of the following is equal to zero",
        choice1: "cos(90) + sin(90) -1",
        choice2: "cos(90) + ln(0)",
        choice3: "ln(1) + sing(90) -1",
        choice4: "1000000000* 0",
        answer1: 1,
        answer2: 3,
        answer3: 4
    };
    ///////////////////////////////////////////////////////////////

  

    /*
    Simple Math Questions in Arabic
    */

   var arabicMath_DDQ1 = {
    p: '<p>10 + <span  id="q1s1"></span> = <span id="q1s2"></span></p>',
    choice1: "100",
    choice2: "111",
    choice3: "90",
    choice4: "5",
    answer1: "90",
    answer2: "100",
    commutatve: false
};

var arabicMath_DDQ2 = {
    p: '<p><span id="q2s1"></span> * <span id="q2s2"></span>  = 123456</p>',
    choice1: "2052",
    choice2: "3",
    choice3: "121",
    choice4: "41152",
    answer1: "3",
    answer2: "41152",
    commutatve: true
};
    var arabicMath_MCQ1 = {
        question: "أيش الرقم الي ما ينقسم على 8",
        choice1: "8",
        choice2: "4",
        choice3: "2",
        choice4: "3",
        answer: 4
    };
    var arabicMath_MCQ2 = {
        question: "اذا كعبنا الرقم 8 ثم ضربنا نصف النتاج في 8 تكون  ما النتيجة النتيجة؟",
        choice1: "2^17",
        choice2: "2^16",
        choice3: "2^15",
        choice4: "2^14",
        answer: 1
    };
    var arabicMath_MCQ3 = {
        question: "1 + 2 *3 / 4 =",
        choice1: "2.25",
        choice2: "2.5",
        choice3: "2.3",
        choice4: "1.75",
        answer: 2

    };
    var arabicMath_MCQ4 = {
        question: "كيف نكتب الرقم 0.000001 بالطريقة العلمية",
        choice1: "0",
        choice2: "السؤال غلط ومستحيل يكون فيه له جواب صحيح",
        choice3: "1x10^-6",
        choice4: "كل الأجوبة السابقة خاطئة",
        answer: 3
    };

    var arabicMath_MCQ5 = {
        question: "ايش اسمك؟",
        choice1: "Abdullah Barnawi",
        choice2: "جابر الجابر",
        choice3: "سيد السيد",
        choice4: "جابر الجابر",
        answer: 1
    };


    var arabicMath_MMCQ1 = {
        question: "أي من الأرقام التالية ممكن تنقسم على 3",
        choice1: "140856",
        choice2: "1389726",
        choice3: "13897283",
        choice4: "3",
        answer1: 1,
        answer2: 2,
        answer3: 4
    };
    var arabicMath_MMCQ2 = {
        question: "أي الأعداد التالية يعتبر عدد أولي",
        choice1: "7",
        choice2: "11",
        choice3: "1201",
        choice4: "1203",
        answer1: 1,
        answer2: 2,
        answer3: 3
    };
    var arabicMath_MMCQ3 = {
        question: "أي الخيارات التالية تساوي صفر؟- يوجد اكثر من جواب و مسموح استعمال الحاسبة",
        choice1: "cos(90) + sin(90) -1",
        choice2: "cos(90) + ln(0)",
        choice3: "ln(1) + sin(90) -1",
        choice4: "1000000000* 0",
        answer1: 1,
        answer2: 3,
        answer3: 4
    };


    /////////////////////////////////////////////////////////////

    var loyalityTest = [loyality_MCQ1, loyality_MCQ2, loyality_MCQ3, loyality_MCQ4, loyality_MCQ5, loyality_MMCQ1, loyality_MMCQ2, loyality_MMCQ3, loyality_DDQ1, loyality_DDQ2];
    var mathTest = [math_MCQ1, math_MCQ2, math_MCQ3, math_MCQ4, math_MCQ5, math_MMCQ1, math_MMCQ2, math_MMCQ3, math_DDQ1, math_DDQ2];
    var arabicMathTest = [arabicMath_MCQ1, arabicMath_MCQ2, arabicMath_MCQ3, arabicMath_MCQ4, arabicMath_MCQ5, arabicMath_MMCQ1, arabicMath_MMCQ2, arabicMath_MMCQ3, arabicMath_DDQ1, arabicMath_DDQ2];
    var selectedTest = mathTest;
    var currentQuestion = -1;  // index of the current question

    // isSaved and MCQMemeory are used to save MCQ choices
    var isSaved = [false, false, false, false, false, false, false, false, false, false]
    var MCQMemory = [new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory(), new FourCheckboxMemory()]

    var points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // points for each question
    var q2Stats = [0, 0]  // correct vs wrong answered questions 
    var timerIntervalId; // timer id to stop the timer

    main()


    /**
     * This is the main funcitons that includes all the code used in this script
     */
    function main() {
        infoForm.hide();
        mcqQuestions.hide();
        btnBack.hide();
        btnNext.hide();
        dropDown1.hide();
        dropDown2.hide();
        canvas1.hide();
        canvas2.hide();
        divFinalResult.hide();




        setEvents();



    }

    /**
     * This function sets up the first drag and drop question
     * It uses Jquery UI library
     * 
     * Note : most of the logic in this funciton was inspired from stack-overflow, then i modified it to 
     * fit my case.
     */
    function setupDDP1() {


        // Setup the dropdown question
        dropDown1.find("p").html(selectedTest[8].p);
        $('.ddq1').eq(0).text(selectedTest[8].choice1);
        $('.ddq1').eq(1).text(selectedTest[8].choice2);
        $('.ddq1').eq(2).text(selectedTest[8].choice3);
        $('.ddq1').eq(3).text(selectedTest[8].choice4);
        ddq1AttemptsCnt = 5;
        attempts.eq(0).text("Remaining Attempts: " + ddq1AttemptsCnt);





        // This code used for set order attribute for items
        var numberOfItems = $("#options1").find('li').length;
        $.each($("#options1").find('li'), function (index, item) {
            console.log("Hi")
            $(item).attr("order", index);
            var removeBotton = $('<i class="fa fa-times" aria-hidden="true" style="display:none"></i>');
            removeBotton.click(function () {
                addToOlderPlace($(this).parent());
            });
            $(item).append(removeBotton);

        });

        $("#q1s1,#q1s2").droppable({
            accept: "li",
            classes: {
                "ui-droppable-hover": "ui-state-hover"
            },
            drop: function (event, ui) {
                console.log("Drop $(this).find('li').length ==" + $(this).find('li').length)
                // Check for existing another option
                ddq1AttemptsCnt -= 1
                attempts.eq(0).text("Remaining Attempts: " + ddq1AttemptsCnt);



                if ($(this).find('li').length > 0) {
                    console.log("Caboom?" + $(this).find('li').eq(0).text());
                    addToOlderPlace($(this).find('li').eq(0));
                }
                // Check if correct answer

                $(this).addClass("ui-state-highlight");
                $(this).addClass('matched');

                //$(ui.draggable).find('i').attr("style","");
                $(this).append($(ui.draggable));
                validateAwnserAndUpdatePoints($(this).text());
                if (ddq1AttemptsCnt == 0) {
                    timeEnded = true;
                    var options = $("#options1");
                    $("i").hide();
                    options.hide();
                    $('#p1').find('i').hide();
                    //next();
                    timeEnded = false;
                }

            }
        });

        $("li").draggable({
            helper: "clone",
            revert: "invalid"
        });


        // This function used for find old place of item
        function addToOlderPlace($item) {
            console.log("addToOlderPlace")

            var itemList = $("#options1");
            $item.find('i').hide();
            itemList.append($item);

        }




    }


    /**
   * This function sets up the second drag and drop question
   * It uses Jquery UI library
   *
   * Note : most of the logic in this funciton was inspired from stack-overflow, then i modified it to
   * fit my case.
   */
    function setupDDP2() {
        ddq2AttemptsCnt = 5;
        attempts.eq(1).text("Remaining Attempts: " + ddq2AttemptsCnt);
        // this code sets the question from the selected test.
        dropDown2.find("p").html(selectedTest[9].p);
        $('.ddq2').eq(0).text(selectedTest[9].choice1);
        $('.ddq2').eq(1).text(selectedTest[9].choice2);
        $('.ddq2').eq(2).text(selectedTest[9].choice3);
        $('.ddq2').eq(3).text(selectedTest[9].choice4);

        // This code used for set order attribute for items
        var numberOfItems = $("#options2").find('li').length;
        $.each($("#options2").find('li'), function (index, item) {
            console.log("Hi")
            $(item).attr("order", index);
            var removeBotton = $('<i class="fa fa-times" aria-hidden="true" style="display:none"></i>');
            removeBotton.click(function () {
                addToOlderPlace($(this).parent());
            });
            $(item).append(removeBotton);

        });

        $("#q2s1,#q2s2").droppable({
            accept: "li",
            classes: {
                "ui-droppable-hover": "ui-state-hover"
            },
            drop: function (event, ui) {
                console.log("Drop $(this).find('li').length ==" + $(this).find('li').length);

                ddq2AttemptsCnt -= 1
                attempts.eq(1).text("Remaining Attempts: " + ddq2AttemptsCnt);



                // Check for existing another option
                if ($(this).find('li').length > 0) {
                    console.log("Caboom?" + $(this).find('li').eq(0).text());
                    addToOlderPlace($(this).find('li').eq(0));
                }



                $(this).addClass("ui-state-highlight");
                $(this).addClass('matched');

                //$(ui.draggable).find('i').attr("style","");
                $(this).append($(ui.draggable));
                console.log("Validation with current= " + currentQuestion + " And points " + points[currentQuestion])
                validateAwnserAndUpdatePoints($(this).text());
                console.log("Done Validation with current= " + currentQuestion + " And points " + points[currentQuestion])

                if (ddq2AttemptsCnt == 0) {
                    timeEnded = true;
                    var options = $("#options2");
                    $("i").hide();
                    options.hide();

                    $('#p2').find('i').hide();
                    //next();
                    timeEnded = false;
                }
            }
        });

        $("li").draggable({
            helper: "clone",
            revert: "invalid"
        });


        // This function used for find old place of item
        function addToOlderPlace($item) {
            console.log("addToOlderPlace")


            var itemList = $("#options2");
            $item.find('i').hide();
            itemList.append($item);
        }




    }





    /**
     * This funciton sets the events { click, change events .. etc}
     */
    function setEvents() {

        // If a test element was selected, set it as the selected text and go to the information form
        tableElement.click(function () {
            var element = $(this)[0];
            console.log(element);
            if (element.innerText == "KFUPM Loyality Test") {
                selectedTest = loyalityTest;
            }
            else if (element.innerText == "Simple Math Test") {
                selectedTest = mathTest;
            }
            else if(element.innerText == "اختبار رياضيات بسيط"){
                selectedTest = arabicMathTest;
            }
            else {
                alert("This test is not yet implemented  ");
                return;
            }
            next(infoForm);
            setupDDP1();
            setupDDP2();
            btnNext.show();
            btnBack.show();
            btnNext.val("Start Test")
        });

        // if the back button was clicked, go back ...
        btnBack.click(function () {
            back();

        });

        // if the next button was clicked validate the input if it was in the form, othweriwse go to the next question 
        btnNext.click(function () {
            if ($(this).val() == "Start Test") {
                if (validateInfoForm()) {
                    next(mcqQuestions);
                    var fiveMinutes = 60 * 5,
                        display = $('.timer1');
                    startTimer(fiveMinutes, display);

                    $(this).prop("value", "Next");
                }
            } else {
                next(mcqQuestions);
            }

        });

        // On key up set the email label to whatever the user typed
        etID.keyup(function (e) {
            var text = $(this).val();
            etEmail.val(text + "@kfupm.edu.sa");
            selectedTest[4].choice1 = etName.val();
        });

        /**
         * This event is to track how many checkboxes are checked
         *  if the checked is more than the limit then clear the checkboexs and check 
         *  the new selected box
         */
        checkboxes.on('change', function () {

            if ($("input[type='checkbox']:checked").length > mcqLimit) {
                var boxes = $("input[type='checkbox']");
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].checked = false;
                }
                this.checked = true;
            }
        });
    }

    // Logic to move to the previous page with assertions on not allowed returns.
    function back(previous) {
        btnNext.val("Next");
        if (prompt.text() == "Please Enter Your Informaiton") {
            infoForm.animate({ width: 'toggle' }, 125, function () {
                testList.animate({ width: 'toggle' }, 125);
            });
            current = testList;
            btnNext.hide();
            btnBack.hide();
        }
        else if (currentQuestion == 0 || currentQuestion == 5 || currentQuestion == 8) {
            alert("You cannot go back during the test!")
        }
        else if (prompt.text() == "Section#1") {
            --currentQuestion;
            loadAnswer();
            mcqQuestions.animate({ width: 'toggle' }, 125, function () {
                prompt.text("Section#1");
                var choices = $(".choice");
                var question = $(".quesiton")
                choices[0].innerHTML = selectedTest[currentQuestion].choice1;
                choices[1].innerHTML = selectedTest[currentQuestion].choice2;
                choices[2].innerHTML = selectedTest[currentQuestion].choice3;
                choices[3].innerHTML = selectedTest[currentQuestion].choice4;
                question.text(selectedTest[currentQuestion].question);
                mcqQuestions = mcqQuestions;
                mcqQuestions.animate({ width: 'toggle' }, 125);
            });


        }
        else if (prompt.text() == "Section#2") {
            --currentQuestion;
            loadAnswer();
            mcqQuestions.animate({ width: 'toggle' }, 125, function () {
                prompt.text("Section#2");
                var choices = $(".choice");
                var question = $(".quesiton")
                choices[0].innerHTML = selectedTest[currentQuestion].choice1;
                choices[1].innerHTML = selectedTest[currentQuestion].choice2;
                choices[2].innerHTML = selectedTest[currentQuestion].choice3;
                choices[3].innerHTML = selectedTest[currentQuestion].choice4;
                question.text(selectedTest[currentQuestion].question);
                //console.log(question);
                mcqQuestions = mcqQuestions;
                mcqQuestions.animate({ width: 'toggle' }, 125);
            });


        }
        else if (currentQuestion == 8) {
            alert("You cannot go back to the previous section!");
        }
        else if (currentQuestion == 9) {
            dropDown2.animate({ width: 'toggle' }, 125, function () {
                dropDown1.animate({ width: 'toggle' }, 125);

            });
            btnNext.val("Next");
            currentQuestion--;
        }


    }

    // Logic to move to the next page given the next element provided and the currentQuestion index
    function next(next) {




        if (next == infoForm && currentQuestion == -1) {
            console.log("opeining info form");
            prompt.text("Please Enter Your Informaiton")
            current.animate({ width: 'toggle' }, 125, function () {
                next.animate({ width: 'toggle' }, 125);
            });
            current = next;
            return;
        } else if (next == testList && currentQuestion == -1) {
            console.log("opeining test list");
            prompt.text("Please Choose a Test")
            current.animate({ width: 'toggle' }, 125, function () {
                next.animate({ width: 'toggle' }, 125);
            });
            current = next;
        }

        if (currentQuestion >= -1 && currentQuestion < 4 && btnNext.val() != "Next Section") {
            console.log("1opeining question" + (currentQuestion + 1));
            if (currentQuestion >= 0) {
                validateAwnserAndUpdatePoints();
                saveAnswer();
            }

            currentQuestion++;
            prompt.text("Section#1");
            var choices = $(".choice");
            var question = $(".quesiton")
            choices[0].innerHTML = selectedTest[currentQuestion].choice1;
            choices[1].innerHTML = selectedTest[currentQuestion].choice2;
            choices[2].innerHTML = selectedTest[currentQuestion].choice3;
            choices[3].innerHTML = selectedTest[currentQuestion].choice4;
            question.text(selectedTest[currentQuestion].question);



            if (currentQuestion == 4 && prompt.text() == "Section#1") {
                btnNext.val("Next Section");
            }
            current.animate({ width: 'toggle' }, 125, function () {
                next.animate({ width: 'toggle' }, 125);
            });
            current = next;
            loadAnswer();
            return;

        }
        else if (btnNext.val() == "Next Section" && currentQuestion == 4) {
            console.log("2opeining question" + (currentQuestion + 1));

            validateAwnserAndUpdatePoints();
            saveAnswer();
            var result;
            if (!timeEnded) {
                result = confirm("Are you sure you want to move to the next section?");
            }
            else {
                result = true;
            }
            if (result == false) {
                loadAnswer();
                return;
            }
            else {
                validateAwnserAndUpdatePoints();
                saveAnswer();

                prompt.text() == "Section#2";
                btnNext.val("Next")
                mcqLimit = 3;
                currentQuestion++;
                if (currentQuestion == 5) {
                    var tenMinutes = 60 * 10,
                        display = $('.timer1');
                    clearInterval();
                    startTimer(tenMinutes, display);
                }

                prompt.text("Section#2");
                var choices = $(".choice");
                var question = $(".quesiton")
                choices[0].innerHTML = selectedTest[currentQuestion].choice1;
                choices[1].innerHTML = selectedTest[currentQuestion].choice2;
                choices[2].innerHTML = selectedTest[currentQuestion].choice3;
                choices[3].innerHTML = selectedTest[currentQuestion].choice4;
                question.text(selectedTest[currentQuestion].question);

                current.animate({ width: 'toggle' }, 125, function () {
                    next.animate({ width: 'toggle' }, 125);
                });
                current = next;
                loadAnswer();
                return;

            }

        }
        else if (currentQuestion >= 5 && btnNext.val() != "Next Section" && currentQuestion < 8) {
            console.log("3opeining question" + (currentQuestion + 1));

            validateAwnserAndUpdatePoints();
            saveAnswer();
            prompt.text("Section#2");
            var choices = $(".choice");
            var question = $(".quesiton")
            currentQuestion++;
            choices[0].innerHTML = selectedTest[currentQuestion].choice1;
            choices[1].innerHTML = selectedTest[currentQuestion].choice2;
            choices[2].innerHTML = selectedTest[currentQuestion].choice3;
            choices[3].innerHTML = selectedTest[currentQuestion].choice4;
            question.text(selectedTest[currentQuestion].question);
            current.animate({ width: 'toggle' }, 125, function () {
                next.animate({ width: 'toggle' }, 125);
            });
            if (currentQuestion == 7 && prompt.text() == "Section#2") {
                btnNext.val("Next Section");
            }
            current = next;
            loadAnswer();
            return;
        }
        else if (currentQuestion == 7 && btnNext.val() == "Next Section") {
            console.log("4opeining question" + (currentQuestion + 1));

            validateAwnserAndUpdatePoints();
            saveAnswer();
            var result;
            if (!timeEnded) {
                result = confirm("Are you sure you want to move to the next section?");
            }
            else {
                result = true;
            }
            if (result == false) {
                loadAnswer();
                return;
            } else {

                prompt.text("Section#3")
                btnNext.val("Next");
                currentQuestion++;

                mcqQuestions.animate({ width: 'toggle' }, 125, function () {
                    dropDown1.animate({ width: 'toggle' }, 125);


                });
                var fourMinutes = 60 * 4,
                    display = $('.timer2');
                clearInterval(timerIntervalId);
                startTimer(fourMinutes, display);


                console.log(dropDown1.find('span'))

            }

        }
        else if (currentQuestion == 8) {
            console.log("5opeining question" + (currentQuestion + 1));

           
            console.log(dropDown1.find('span'))
            btnNext.val("Submit");
            dropDown1.animate({ width: 'toggle' }, 125, function () {
                dropDown2.animate({ width: 'toggle' }, 125);

            });
            currentQuestion++;
            console.log(dropDown2)


        }
        else if (currentQuestion == 9) {
            console.log("6opeining question" + (currentQuestion + 1));

            var result;
            if (!timeEnded) {
                result = confirm("Are you sure you want to submit?");
            }
            else {
                result = true;
            }
            if (result == false) {
                loadAnswer();
                return;
            } else {
                /**
                 * When the exam ends, the timer stopped. 
                 * The Results Are Shown as charts and tables.
                 * And an email is sent.
                 */
                clearInterval(timerIntervalId);
                
                btnNext.hide();
                btnBack.hide();
                dropDown2.hide();
                divFinalResult.show();
                console.log(("#img-background"));
                canvas1.show();
                canvas2.show();
                prompt.text("Your Result")
                lblScore.text("You Scored " + getPoints() + " and the result will be sent to " + etEmail.val());
                var sec1Total = 0;
                var sec2Total = 0;
                var sec3Total = 0;
                for (i = 0; i < points.length; i++) {
                    if (i >= 8) {
                        sec3Total += points[i];
                        tableReport.append(('"<tr id="sec3"><td>' + (i + 1) + '</td><td>' + points[i] + '</td><td>2</td></tr>'));

                    }
                    else if (i >= 5) {
                        sec2Total += points[i];
                        tableReport.append(('"<tr id="sec2"><td>' + (i + 1) + '</td><td>' + points[i] + '</td><td>3</td></tr>'));

                    }
                    else {
                        sec1Total += points[i];
                        tableReport.append(('"<tr id="sec1"><td>' + (i + 1) + '</td><td>' + points[i] + '</td><td>2</td></tr>'));

                    }
                }
                tableReport.append(('"<tr><td> <b>Section 1 Total<b> </td><td>' + sec1Total + '</td><td>5</td></tr>'));
                tableReport.append(('"<tr><td> <b>Section 2 Total<b> </td><td>' + sec2Total + '</td><td>9</td></tr>'));
                tableReport.append(('"<tr><td> <b>Section 3 Total<b> </td><td>' + sec3Total + '</td><td>4</td></tr>'));
                tableReport.append(('"<tr><td> <b>Total<b> </td><td>' + getPoints() + '</td><td>18</td></tr>'));

                var ctx1 = document.getElementById('chart1').getContext('2d');
                var ctx2 = document.getElementById('chart2').getContext('2d');

                var data1 = {
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Section 1',
                        'Section 2',
                        'Section 3'
                    ],
                    datasets: [{

                        data: [sec1Total / 5 * 100, Math.abs(sec2Total) / 9 * 100, sec3Total / 4 * 100],



                        backgroundColor: [
                            '#7CDDDD',
                            '#007ED6',
                            '#FF7300']
                    }]
                };

                var options1 = {
                    title: {
                        display: true,
                        text: 'Number and percentage of correctly answered questions in each group.',
                        position: 'top',
                        fontSize: 24
                    },
                    rotation: -0.7 * Math.PI
                };

                var data2 = {
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Correct',
                        'Wrong'

                    ],
                    datasets: [{

                        data: [q2Stats[0], q2Stats[1]],



                        backgroundColor: [
                            '#52D726',

                            '#FF0000']
                    }]
                };

                var options2 = {
                    title: {
                        display: true,
                        text: 'Number and percentage of partially answered questions in the second group',
                        position: 'top',
                        fontSize: 24
                    },
                    rotation: -0.7 * Math.PI
                };
                var myPieChart = new Chart(ctx1, {
                    type: 'pie',
                    data: data1,
                    options: options1
                });
                var myPieChart = new Chart(ctx2, {
                    type: 'pie',
                    data: data2,
                    options: options2
                });

                console.log(lblScore.val());
                var mailBody = 'Dear ' + $("#name").val();
                mailBody += '\nThank you for choosing KFUPM Mini-Test Center. This message is to give you your exam Test Result.';
                mailBody += '\n\nYou scored ' + sec1Total + ' out of 10 in Section 1';
                mailBody += '\nYou scored ' + sec2Total + ' out of 9 in Section 2';
                mailBody += '\nYou scored ' + sec3Total + ' out of 4 in Section 3';
                mailBody += '\n\nRegards\nKFUPM Mini-Test Team';

                sendMail(mailBody)

            }


        }


    }

    /**
     * This funcitons returns the points the user have gathered
     */
    function getPoints() {
        sum = 0;
        for (i = 0; i < points.length; i++) {
            sum += points[i];
        }
        return sum;
    }


    /**
     * This method takes the current question index or the selected drowdown choice 
     * @param {a String variable that represents the dorpdown choice the user entered} dropChoice 
     * @returns it does not return anything , but it modifies the value of points array that is used to get
     * the points
     */
    function validateAwnserAndUpdatePoints(dropChoice) {

        if (currentQuestion >= 0 && currentQuestion < 5) {
            var correctAnswerIndex = selectedTest[currentQuestion].answer - 1;
            var questionIndex = currentQuestion;
            if (checkboxes[correctAnswerIndex].checked == true) {
                points[questionIndex] = 1;
            } else {
                points[questionIndex] = 0;
            }
        }
        else if (currentQuestion >= 5 && currentQuestion < 8) {
            var correctAnswerIndex1 = selectedTest[currentQuestion].answer1 - 1;
            var correctAnswerIndex2 = selectedTest[currentQuestion].answer2 - 1;
            var correctAnswerIndex3 = selectedTest[currentQuestion].answer3 - 1;
            var questionIndex = currentQuestion;
            points[questionIndex] = 0;


            for (i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    if (i == correctAnswerIndex1 || i == correctAnswerIndex2 || i == correctAnswerIndex3) {
                        points[questionIndex]++;
                        q2Stats[0] += 1;
                    } else {
                        points[questionIndex]--;
                        q2Stats[1] += 1;
                    }
                }
            }


        }
        else {
            if (currentQuestion == 8) {
                spans = dropDown1.find("span");
                console.log("Choice is " + dropChoice);

                if (selectedTest[8].commutatve) {
                    if (dropChoice == selectedTest[8].answer1 || dropChoice == selectedTest[8].answer2) {
                        points[currentQuestion]++;
                    } else {
                        points[currentQuestion]--;
                    }
                }
                else {
                    if (dropChoice == selectedTest[8].answer1 && spans[0].innerText == dropChoice) {
                        points[currentQuestion]++;
                    }
                    else if (dropChoice == selectedTest[8].answer2 && spans[1].innerText == dropChoice) {
                        points[currentQuestion]++;

                    }
                    else {
                        points[currentQuestion]--;

                    }
                }



            }
            if (currentQuestion == 9) {
                console.log("Choice is " + dropChoice);
                spans = dropDown2.find("span");


                if (dropChoice == selectedTest[9].answer1 || dropChoice == selectedTest[9].answer2) {
                    points[currentQuestion]++;
                } else {
                    points[currentQuestion]--;
                }

            }

        }

        updatedPoints = getPoints();
        lblPoints.html("Collected Score <sub>For debugging</sub> : " + updatedPoints);



    }
    /**
     * This funciton is called whenever the user clicks the next button in a MCQ 
     * It saved the checkboxes that he has chosen.
     */
    function saveAnswer() {
        if (currentQuestion != -1 && currentQuestion < 5) {
            MCQMemory[currentQuestion].checkbox1 = checkboxes[0].checked;
            MCQMemory[currentQuestion].checkbox2 = checkboxes[1].checked;
            MCQMemory[currentQuestion].checkbox3 = checkboxes[2].checked;
            MCQMemory[currentQuestion].checkbox4 = checkboxes[3].checked;
            isSaved[currentQuestion] = true
            console.log("Saved Quesiton#" + (currentQuestion + 1) + "To " + JSON.stringify(MCQMemory[currentQuestion]));
        }
        else if (currentQuestion >= 5 && currentQuestion < 8) {
            MCQMemory[currentQuestion].checkbox1 = checkboxes[0].checked;
            MCQMemory[currentQuestion].checkbox2 = checkboxes[1].checked;
            MCQMemory[currentQuestion].checkbox3 = checkboxes[2].checked;
            MCQMemory[currentQuestion].checkbox4 = checkboxes[3].checked;
            isSaved[currentQuestion + 5] = true
            console.log("Saved Quesiton#" + (currentQuestion + 1) + "To " + JSON.stringify(MCQMemory[currentQuestion]));
        }
    }

    /**
     * This function is called whenever next or back is clicked 
     * It checks wheither their is a saved awnser and loads it. If there was 
     * no saved awnsers it unchecks all checkboxes.
     */
    function loadAnswer() {

        if (currentQuestion != -1 && currentQuestion < 5) {
            console.log("Loading Quesiton#" + (currentQuestion + 1) + "From " + JSON.stringify(MCQMemory[currentQuestion]));
            checkboxes[0].checked = MCQMemory[currentQuestion].checkbox1
            checkboxes[1].checked = MCQMemory[currentQuestion].checkbox2
            checkboxes[2].checked = MCQMemory[currentQuestion].checkbox3
            checkboxes[3].checked = MCQMemory[currentQuestion].checkbox4

        }
        else if (currentQuestion >= 5 && currentQuestion < 8) {
            console.log("Loading Quesiton#" + (currentQuestion + 1) + "From " + JSON.stringify(MCQMemory[currentQuestion]));
            checkboxes[0].checked = MCQMemory[currentQuestion].checkbox1
            checkboxes[1].checked = MCQMemory[currentQuestion].checkbox2
            checkboxes[2].checked = MCQMemory[currentQuestion].checkbox3
            checkboxes[3].checked = MCQMemory[currentQuestion].checkbox4



        }
    }


    /**
     * Perfom form validaiton for the name existance 
     * and the format of the ID
     */
    function validateInfoForm() {
        if (etName.val() == '') {
            alert("Name is empty.")
            return false;
        }
        var pattern = /([s|g]{1}[0-9]{9})$/
        if (!pattern.test(etID.val())) {
            alert("Enter a valid ID please")
            return false
        }

        return true;
    }

    /**
     * This method starts the timer
     * @param {Timer Duration} duration 
     * @param {The html element that will be updated each second} display 
     */
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        clearInterval(timerIntervalId)
        timerIntervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (timer == 0) {
                if (currentQuestion < 4) {
                    currentQuestion = 4;
                } else if (currentQuestion < 7) {
                    currentQuestion = 7;
                }
                else { currentQuestion = 9; }
                console.log("xxxxx====>" + currentQuestion);
                btnNext.val("Next Section");
                alert("Time is up")
                timeEnded = true;
                clearInterval(timerIntervalId);
                next(mcqQuestions);
                timeEnded = false;


            }

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    /**
     * This function uses window.location to send a formatted email.
     * @param {Formated email content} mailBody 
     */
    function sendMail(mailBody) {

        var email = $("#email").val()

        window.location = "mailto:" + email + "?subject=" + escape("Your Test Result") + "&body=" + escape(mailBody);

    }

    $('.tests-list li').hover(function(e){
        //alert("Hovered ") // or 56
        $(this).find("h2").css('font-size', e.type=="mouseenter"? 28 : 22);
    })

});
