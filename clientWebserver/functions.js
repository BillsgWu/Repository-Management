const Din = ()=>{
    asyquery({db:"goods"}).then((data)=>{
        var html = "";
        for(i=0;i<data.length;++i)
        {
            html += "<option value=\"" + data[i][0] + "\">" + data[i][1] + "</option>";
        }
        document.getElementById("dinselectGoods").innerHTML = html;
    });
    document.getElementById("dinok").onclick = () => {
        var select = document.getElementById("dinselectGoods");
        var good_id = select.options[select.selectedIndex].value;
        var count = document.getElementById("dininputCount").value;
        asyquery({db:"goods","id":good_id}).then((data)=>{
            asymodify({db:"goods","id":good_id,count:parseInt(data[0][4]) + parseInt(count)});
            asyadd({db:"log",type:"0",good_id:good_id,count:count});
        });
    };
};
const Dout = ()=>{
    asyquery({db:"goods"}).then((data)=>{
        var html = "";
        for(i=0;i<data.length;++i)
        {
            html += "<option value=\"" + data[i][0] + "\">" + data[i][1] + "</option>";
        }
        document.getElementById("doutselectGoods").innerHTML = html;
    });
    document.getElementById("doutok").onclick = () => {
        var select = document.getElementById("doutselectGoods");
        var good_id = select.options[select.selectedIndex].value;
        var count = document.getElementById("doutinputCount").value;
        asyquery({db:"goods","id":good_id}).then((data)=>{
            if(parseInt(data[0][4]) - parseInt(count) >= 0)
            {
                asymodify({db:"goods","id":good_id,count:parseInt(data[0][4]) - parseInt(count)});
                asyadd({db:"log",type:"1",good_id:good_id,count:count});
            }
            else
            {
                alert("出库量大于库存量，数据库未做更改。");
            }
        });
    };
};