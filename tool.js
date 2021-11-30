var Tool = {};
Tool.parseUrl = function(){
    var args=new Object();   
    var query=location.search.substring(1);//获取查询串   
    var pairs=query.split("&");//在逗号处断开   
    for(var   i=0;i<pairs.length;i++)   
    {   
        var pos=pairs[i].indexOf('=');//查找name=value   
            if(pos==-1)   continue;//如果没有找到就跳过   
            var argname=pairs[i].substring(0,pos);//提取name   
            var value=pairs[i].substring(pos+1);//提取value   
            args[argname]=unescape(value);//存为属性   
    }
    return args;
}
Tool.formatDate=function(date){
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
}

 $(function(){
        $.fn.autoHeight = function(){    
        function autoHeight(elem){
            elem.style.height = 'auto';
            elem.scrollTop = 0;
            elem.style.height = elem.scrollHeight + 'px';
        }
        this.each(function(){
            autoHeight(this);
            $(this).on('keyup', function(){
                autoHeight(this);
            });
        });     
    }                
    $('textarea[autoHeight]').autoHeight();    
})


function xedit(m,col){
     if( $(m).find(".txt").length==0){
         let id=$(m).parent().find("td").eq(0).html();
         let s = `<input style="width:100%" class="txt" value="`+m.innerHTML+`"/>`;
             $(m).html(s);
             $(m).find(".txt").focus();
             $(m).find(".txt").blur(function(){
                 let data={};
                 data["id"]=id;
                 data[col]=$(m).find(".txt").val();
                 $.post("../attendance/editPost.html",data,function(d){
                     console.log(d);
                     $(m).html($(m).find(".txt").val());
                 });
             });
         }
 }
