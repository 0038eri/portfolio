// スライドショー

// スライド種類判定
var $slideName;

// 現在のスライドの番号
code_currentSlideNumber = 0;
design_currentSlideNumber = 0;

// はじめ（最小値のスライド）
code_minSlideNumber = 0;
design_minSlideNumber = 0;

// さいご（最大値のスライド）
code_maxSlideNumber = 1;
design_maxSlideNumber = 3;

slide_code();
slide_design();

// モード
var mode = 'normal';

// クリックシステム

// prevをクリック
$("a.prev").click(function () {
    // 親を取得
    $slideName = $(this).parent().attr('id');
    // プログラミングスライドショー
    if ($slideName === "check-code") {
        // 現在のスライドが、はじめのスライドだったら
        // 現在のスライドを、さいごのスライドに戻す
        if (code_currentSlideNumber === code_minSlideNumber) {
            code_currentSlideNumber = code_maxSlideNumber;
        } else {
            // 現在のスライドの番号をマイナスする
            code_currentSlideNumber--;
        }
        console.log(code_currentSlideNumber);
        slide_code();
        // デザインスライドショー    
    } else if ($slideName === "check-design") {
        // 現在のスライドが、はじめのスライドだったら
        // 現在のスライドを、さいごのスライドに戻す
        if (design_currentSlideNumber === design_minSlideNumber) {
            design_currentSlideNumber = design_maxSlideNumber;
        } else {
            // 現在のスライドの番号をマイナスする
            design_currentSlideNumber--;
        }
        console.log(design_currentSlideNumber);
        slide_design();
    }
});

// nextをクリック
$("a.next").click(function () {
    // 親を取得
    $slideName = $(this).parent().attr('id');
    // プログラミングスライドショー
    if ($slideName === "check-code") {
        // 現在のスライドが、さいごのスライドだったら、
        // 現在のスライドを、はじめのスライドに戻す
        if (code_currentSlideNumber === code_maxSlideNumber) {
            code_currentSlideNumber = code_minSlideNumber;
        } else {
            // 現在のスライドの番号をプラスする
            code_currentSlideNumber++;
        }
        console.log(code_currentSlideNumber);
        slide_code();
        // デザインスライドショー
    } else if ($slideName === "check-design") {
        // 現在のスライドが、さいごのスライドだったら、
        // 現在のスライドを、はじめのスライドに戻す
        if (design_currentSlideNumber === design_maxSlideNumber) {
            design_currentSlideNumber = design_minSlideNumber;
        } else {
            // 現在のスライドの番号をプラスする
            design_currentSlideNumber++;
        }
        console.log(design_currentSlideNumber);
        slide_design();
    }
});

// スライドきりかえシステム

// プログラミングスライドショー
function slide_code() {
    switch (code_currentSlideNumber) {
        case 0:
            sketch1();
            break;
        default:
            comingSoon_c();
            break;
    }
}

// デザインスライドショー
function slide_design() {
    switch (design_currentSlideNumber) {
        case 0:
            beSerious();
            break;
        case 1:
            rainbow();
            break;
        case 2:
            nothing();
            break;
        default:
            comingSoon_d();
            break;
    }
}


// プログラミング作品

// Processing その1 "sketch1"
function sketch1() {
    $("#code-name").text("sketch1");
    $("#check-code img.project").attr('src', 'images/projects/code/sketch1.gif');
    $("code-link").removeAttr('href onclick');
    $("#code-paragraph").text("はじめてのProcessingの作品です。黒い背景に、カラフルな円が震えます。マウスクリックすると、背景が白になり、円も止まります。");
}

// Coming Soon
function comingSoon_c() {
    $("#code-name").text("Coming Soon");
    $("#check-code img.project").attr('src', 'images/projects/coming-soon.png');
    $("#code-link").removeAttr('href onclick');
    $("#code-paragraph").text("次の作品をお楽しみにお待ちください。");
}

// デザイン作品

// Be Serious 本気になろう。
function beSerious() {
    $("#design-name").text("Be Serious.");
    $("#check-design img.project").attr('src', 'images/projects/design/be-serious.png');
    $("#design-link").attr('href', 'https://osawaeri.github.io/be-serious./');
    $('#design-link').removeAttr('onclick');
    $("#design-paragraph").text("Life is Tech!スクールカップの作品で、テーマが「スクールの課題を解決せよ」ということで、実際に社員さんにスクールの課題についてお伺いしました。学校が忙しかったり、やる気が出ないメンバーにむけて、改めてスクールの良さについて伝えるサイトを作り、応募しました。デザインやレスポンシブ対応などを評価していただきました。【Life is Tech!スクールカップ 2018 シルバーアワード受賞】");
}

// rainbow.
function rainbow() {
    $("#design-name").text("rainbow.");
    $("#check-design img.project").attr('src', 'images/projects/design/rainbow.png');
    $('#design-link').attr('href', 'http://osawaeri.github.io/rainbow.');
    $('#design-link').removeAttr('onclick');
    $('#design-paragraph').text("高校生をテーマにしました。私自身が、自分に合った環境に身を置くことで人生を楽しんでいます。高校生は「自分の色」を出せていない、と感じます。すべての高校生に、自分の色を出して、楽しい学生生活を送ってほしい。自分に合った環境に身を置いてほしい。という思いでこちらを制作しました。");
}

// ないものねだり
function nothing() {
    $('#design-name').text('ないものねだり');
    $('#check-design img.project').attr('src', 'images/projects/design/nothing.jpg');
    $('#design-link').removeAttr('href');
    $('#design-link').attr('onclick', 'displayModal()');
    $('#design-paragraph').text('「ないもの」をテーマにするということで、「ないものねだり」という作品にしました。「恋愛」、「時間」、「金」、「地位」、「友情」。みんな、なにかしらをもっていて、なにかしらをもっていない。互いのものをねだり合う。この世は「ないものねだり」。');
}


// Coming Soon
function comingSoon_d() {
    $("#design-name").text("Coming Soon");
    $("#check-design img.project").attr('src', 'images/projects/coming-soon.png');
    $("#design-link").removeAttr('href onclick');
    $("#design-paragraph").text("次の作品をお楽しみにお待ちください。");
}

// モーダル

function displayModal() {
    $('#modal').css('display', 'block');
    no_scroll();
    mode = 'modal';
}

$('#modal').click(function () {
    if (mode == 'modal') {
        $('#modal').css('display', 'none');
        mode = 'normal';
        return_scroll();
    }
});

$('.modal').on('click', function (e) {
    e.stopPropagation();
});


//スクロール禁止用関数
function no_scroll() {
    //PC用
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(scroll_event, function (e) {
        e.preventDefault();
    });
    //SP用
    $(document).on('touchmove.noScroll', function (e) {
        e.preventDefault();
    });
}

//スクロール復活用関数
function return_scroll() {
    //PC用
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).off(scroll_event);
    //SP用
    $(document).off('.noScroll');
}

// アニメーション

$(function () {
    setTimeout('anm()'); //アニメーションを実行
});

function anm() {
    $('.triangle').animate({
        top: 10
    }, 800).animate({
        top: 20
    }, 800);
    setTimeout('anm()', 1600)
}

// フェードプラグイン

var activePoint;

$('.anm').waypoint(function (direction) {
    activePoint = $(this.element);
    if (direction === 'down') {
        activePoint.addClass('fade');
    } else {
        activePoint.removeClass('fade');
    }
}, {
    offset: '80%'
});