function user(){
    if(getCookie('_17mb_username') !=""){
        document.write('<p class="p1"><i></i><a href="/mybook.php" rel="nofollow">���</a></p><p class="p2"><i></i><a href="/user.php" rel="nofollow">�ҵ�</a></p>')
    }else{
        document.write('<p class="p1"><i></i><a href="/mybook.php" rel="nofollow">���</a></p><p class="p2"><i></i><a href="/login.php" rel="nofollow">��¼</a></p>')
    }
}
function getCookie(c_name)
{
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1)
                c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}
var checkbg = "#577a13";
//����ҳ�û�����
function nr_setbg(intype){
    var light = document.getElementById("lightdiv");
    if(intype == "light"){
        if(light.innerHTML == "�ص�"){
            set("light","yes");
            document.cookie="light=yes;path=/";
        }
        else{
            set("light","no");
            document.cookie="light=no;path=/";
        }
    }
    if(intype == "big"){
        set("font","big");
        document.cookie="font=big;path=/";
    }
    if(intype == "middle"){
        set("font","middle");
        document.cookie="font=middle;path=/";
    }
    if(intype == "small"){
        set("font","small");
        document.cookie="font=small;path=/";
    }
}

//����ҳ��ȡ����
function getset(){
    var strCookie=document.cookie;
    var arrCookie=strCookie.split("; ");
    var light;
    var font;

    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if("light"==arr[0]){
            light=arr[1];
            break;
        }
    }
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if("font"==arr[0]){
            font=arr[1];
            break;
        }
    }

    //light
    if(light == "yes"){
        set("light","yes");
    }
    else if(light == "no"){
        set("light","no");
    }
    else if(light == "huyan"){
        set("light","huyan");
    }
    //font
    if(font == "big"){
        set("font","big");
    }
    else if(font == "middle"){
        set("font","middle");
    }
    else if(font == "small"){
        set("font","small");
    }
    else{
        set("","");
    }
}

//����ҳӦ������
function set(intype,p){
    var nr_body = document.getElementById("novelbody");//ҳ��body
    var lightdiv = document.getElementById("lightdiv");//�ƹ�div
    var fontfont = document.getElementById("fontfont");//����div
    var fontbig = document.getElementById("fontbig");//������div
    var fontmiddle = document.getElementById("fontmiddle");//������div
    var fontsmall = document.getElementById("fontsmall");//С����div
    var nr1 =  document.getElementById("novelcontent");//����div
    //�ƹ�
    if(intype == "light"){
        if(p == "yes"){
            //�ص�
            lightdiv.innerHTML = "����";
            nr_body.style.backgroundColor = "#32373B";
            nr1.style.color = "#999";
        }
        else if(p == "no"){
            //����
            lightdiv.innerHTML = "�ص�";
            nr_body.style.backgroundColor = "#DCECD2";
            nr1.style.color = "#666";
        }
        else if(p == "huyan"){
            //����
            lightdiv.innerHTML = "�ص�";
            nr_body.style.backgroundColor = "#DCECD2";
            nr1.style.color = "#000";
        }
    }
    //����
    if(intype == "font"){
        //alert(p);
        fontbig.style.backgroundColor = "";
        fontmiddle.style.backgroundColor = "";
        fontsmall.style.backgroundColor = "";
        if(p == "big"){
            fontbig.style.backgroundColor = checkbg;
            nr1.style.fontSize = "24px";
        }
        if(p == "middle"){
            fontmiddle.style.backgroundColor = checkbg;
            nr1.style.fontSize = "16px";
        }
        if(p == "small"){
            fontsmall.style.backgroundColor = checkbg;
            nr1.style.fontSize = "12px";
        }
    }
}
function _17mb_top(){
    document.write("<!--�������-->");
}
function _17mb_bottom(){
    document.write("<!--�ײ����-->");
}
function _17mb_all(){
    document.write("<!--�����������������-->");
}
function _17mb_tongji(){
    document.write("<!--ͳ��-��ͨ��ͬ������-->");
}

//�첽��ͳ�ƴ���ֱ�ӷ��ڴ˴�,����Ҫ�ѿ�ͷ��<script>�ͽ�β��</script>ȥ��