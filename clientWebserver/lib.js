let IP=window.location.origin.replace("http://","").replace("https://",""),PORT=35782;
const decodedata=(string)=>{
    return eval(string);
};

const asyadd=async ({db="goods",tip=true,name=NaN,tag_id=NaN,company=NaN,count=NaN,type=NaN,good_id=NaN,date=NaN,message=NaN,category=NaN})=>{
    var url = "http://" + IP + ":" + PORT + "/api/add?db=" + db;
    var param = "";
    if(name)
    {
        param += (param?"&":"") + "name=" + name;
    }
    if(tag_id)
    {
        param += (param?"&":"") + "tag_id=" + tag_id;
    }
    if(company)
    {
        param += (param?"&":"") + "company=" + company;
    }
    if(count)
    {
        param += (param?"&":"") + "count=" + count;
    }
    if(type)
    {
        param += (param?"&":"") + "type=" + type;
    }
    if(good_id)
    {
        param += (param?"&":"") + "good_id=" + good_id;
    }
    if(date)
    {
        param += (param?"&":"") + "date=" + date;
    }
    if(message)
    {
        param += (param?"&":"") + "message=" + message;
    }
    if(category)
    {
        param += (param?"&":"") + "category=" + category;
    }
    var data = fetch(url,{mode:"cors",
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:"post",
                body:param}).then((res)=>{
        if(!res.ok&&tip)
        {
            alert("出现错误，错误码" + res.statusText);
        }
        return {"status":res.statusText};
    });
    return await data;
};
const asyquery=async ({db="goods",tip=true,id=NaN,name=NaN,tag_id=NaN,company=NaN,count=NaN,type=NaN,good_id=NaN,date=NaN,message=NaN,category=NaN})=>{
    var url = "http://" + IP + ":" + PORT + "/api/query?db=" + db;
    if(id)
    {
        url += "&id=" + id;
    }
    if(name)
    {
        url += "&name=" + name;
    }
    if(tag_id)
    {
        url += "&tag_id=" + tag_id;
    }
    if(company)
    {
        url += "&company=" + company;
    }
    if(count)
    {
        url += "&count=" + count;
    }
    if(type)
    {
        url += "&type=" + type;
    }
    if(good_id)
    {
        url += "&good_id=" + good_id;
    }
    if(date)
    {
        url += "&date=" + date;
    }
    if(message)
    {
        url += "&message=" + message;
    }
    if(category)
    {
        url += "&category=" + category;
    }
    var data = fetch(url,{mode:"cors"}).then((res)=>{
        if(res.ok)
        {
            return res.json();
        }
        else if(tip)
        {
            alert("出现错误，错误码" + res.statusText);
            return {"data":"[]"};
        }
    }).then((data)=>{
        return data.data;
    });
    return decodedata(await data);
};
const asydelete=async ({db="goods",tip=true,id=NaN})=>{
    var url = "http://" + IP + ":" + PORT + "/api/delete?db=" + db + "&id=" + id;
    var data = fetch(url,{mode:"cors"}).then((res)=>{
        if(!res.ok&&tip)
        {
            alert("出现错误，错误码" + res.statusText);
        }
        return {"status":res.statusText};
    });
    return await data;
}
const asymodify=async ({db="goods",tip=true,id=NaN,name=NaN,tag_id=NaN,company=NaN,count=NaN,type=NaN,good_id=NaN,date=NaN,message=NaN,category=NaN})=>{
    var url = "http://" + IP + ":" + PORT + "/api/modify?db=" + db;
    var param = "id=" + id;
    if(name)
    {
        param += "&name=" + name;
    }
    if(tag_id)
    {
        param += "&tag_id=" + tag_id;
    }
    if(company)
    {
        param += "&company=" + company;
    }
    if(count)
    {
        param += "&count=" + count;
    }
    if(type)
    {
        param += "&type=" + type;
    }
    if(good_id)
    {
        param += "&good_id=" + good_id;
    }
    if(date)
    {
        param += "&date=" + urldate;
    }
    if(message)
    {
        param += "&message=" + message;
    }
    if(category)
    {
        param += "&category=" + category;
    }
    var data = fetch(url,{mode:"cors",
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                method:"post",
                body:param}).then((res)=>{
        if(!res.ok&&tip)
        {
            alert("出现错误，错误码" + res.statusText);
        }
        return {"status":res.statusText};
    });
    return await data;
};
const asysetlimit=async ({id=NaN,tip=true,llimit=-1,rlimit=2147483647})=>{
    var url = "http://" + IP + ":" + PORT + "/api/setlimit";
    var param = `id=${id}&llimit=${llimit}&rlimit=${rlimit}`;
    var data = fetch(url,{mode:"cors",
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            method:"post",
            body:param}).then((res)=>{
        if(!res.ok&&tip)
        {
            alert("出现错误，错误码" + res.statusText);
        }
        return {"status":res.statusText};
    });
    return await data;
};