setInterval(()=>{
    asyquery({db:"messageq"}).then((data)=>{
        var html = "";
        for(var i=0;i<data.length;++i)
        {
            html += `<li class="list-group-item">${data[i][1]}</li>`;
        }
        document.getElementById("messageq").innerHTML = html;
    });
},3000);
setInterval(()=>{
    asyquery({db:"goods"}).then((datag)=>{
        asyquery({db:"tag"}).then((datat)=>{
            var tags={};
            for(var i=0;i<datat.length;++i)
            {
                tags[datat[i][0]]=datat[i];
            }
            asyquery({db:"limit"}).then((datal)=>{
                var limits={};
                for(var i=0;i<datal.length;++i)
                {
                    limits[datal[i][0]]=datal[i];
                }
                var html = "";
                for(var i=0;i<datag.length;++i)
                {
                    html += "<tr>";
                    for(var j=0;j<7;++j)
                    {
                        if(j==2)
                        {
                            html += `<td>${tags[datag[i][j]][1]}</td>`;
                        }
                        else if(j==5)
                        {
                            if(datag[i][0] in limits)
                            {
                                html += `<td>${limits[datag[i][0]][1]}</td>`;
                            }
                            else
                            {
                                html += "<td>不限</td>"
                            }
                        }
                        else if(j==6)
                        {
                            if(datag[i][0] in limits)
                            {
                                html += `<td>${limits[datag[i][0]][2]}</td>`;
                            }
                            else
                            {
                                html += "<td>不限</td>"
                            }
                        }
                        else
                        {
                            html += `<td>${datag[i][j]}</td>`;
                        }
                    }
                    html += "</tr>";
                }
                document.getElementById("existbody").innerHTML = html;
            });
        });
    });
},3000);