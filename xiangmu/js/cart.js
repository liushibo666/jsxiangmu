//1.根据cookie值，创建一个商品列表的函数
function createcart(sid, num) {//sid：图片的编号  num:商品的数量
    $.ajax({
        url: '../json/cart.json',
        dataType: 'json'
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {//图片的sid和数据里面的sid匹配
                var $clone = $('.spi-item:hidden').clone(true);//对隐藏的模块进行克隆
                //分别赋值
                $clone.find('.spi-pic').find('img').attr('src', data[i].img);
                $clone.find('.spi-pic').find('img').attr('sid', data[i].sid);
                $clone.find('.spi-d-info').find('a').html(data[i].title);
                $clone.find('.b-price').find('strong').html(data[i].price);
                $clone.find('.sp-form').find('input').val(num);
                //计算价格,每个商品的价格
                var $dj1 = parseFloat($clone.find('.b-price strong').html());//获取单价
                $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));//num：数量
                $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
                $('.item-list').append($clone);//追加
                kong();//购物车是否为空
                totalprice();//总价和总数
            }
        }
    });
}
//2.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(',');//存放sid数组
    var n = getCookie('cartnum').split(',');//存放数量数组
    for (var i = 0; i < s.length; i++) {
        createcart(s[i], n[i]);//遍历创建商品列表
    }
}

//3.商品列表(cookie)不存在，购物车为空
kong();
function kong() {
    if (getCookie('cartsid')) {//cookie存在，有商品，购物车不再为空
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}

//4.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的数量
    $('.spi-item:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.b-sum strong').html());
            countnum += parseInt($(this).find('.sp-form').find('input').val());
        }
    });
    //赋值
    $('.txt-sj').html('￥' + total.toFixed(2));
    $('.sp-num em').html(countnum);
}

//5.修改数量的操作
//改变商品数量++
$('.spadd').on('click', function() {
    var $count = $(this).parents('.spi-item').find('.sp-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.spi-item').find('.sp-form input').val($count);
    $(this).parents('.spi-item').find('.b-sum').find('strong').html(singlespiprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.spdown').on('click', function() {
    var $count = $(this).parents('.spi-item').find('.sp-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.spi-item').find('.sp-form input').val($count);
    $(this).parents('.spi-item').find('.b-sum').find('strong').html(singlespiprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//直接输入改变数量
$('.sp-form input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.spi-item').find('.b-sum').find('strong').html(singlespiprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

//6.计算数量改变后单个商品的价格
function singlespiprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.spi-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.spi-item').find('.sp-form input').val());
    return ($dj * $cnum).toFixed(2);
}

//7.获取对应的cookie值，将其转换成数组
var sidarr = [];
var numarr = [];
function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}
}


//8.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.spi-item').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.spi-item').find('.sp-form input').val();
    addCookie('cartnum', numarr.toString(), 7);
}


//9.删除
//删除cookie的函数
function delspilist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.item-list').on('click', '.b-action a', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
   	 $(this).first().parents('.spi-info').remove();
   }
    delspilist($(this).first().parents('.spi-info').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除选中商品的函数
$('.qxl a:first').on('click', function() {
    $('.spi-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delspilist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});
//全选
$('.qxbox').on('change',function(){
	if($(this).prop('checked')){
		$('.spi-item:visible').find('input:checkbox').prop('checked',true);
	}else{
		$('.spi-item:visible').find('input:checkbox').prop('checked',false);
	}
	$('.qxbox').prop('checked',$(this).prop('checked'));
	totalprice();
});

var $input=$('.spi-item:visible').find('input:checkbox');
$('.spi-item:visible').find('input:checkbox').on('change',function(){
	if($('.spi-item:visible').find('input:checked').length==$input.size()){
		$('.qxbox').prop('checked',true);
	}else{
		$('.qxbox').prop('checked',false);
	}
	totalprice();
});