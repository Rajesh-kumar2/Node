$(()=>{
    var tableBody = $("#eventsTableBody");
    $.ajax({
        method: "GET",
        url:"http://localhost:9090/api/events",
        contentType:"application/json"
    }).done((data)=>{
        console.log(data);
        
        for(const event of data){
            var row =`
            <tr>
                <td>${event.eventCode}</td>
                <td>${event.eventName}</td>
                <td>${event.startDate}</td>
                <td>${event.endDate}</td>
                <td>${event.description}</td>
                <td>${event.fees}</td>
                <td><div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${event.attendance}%"></div>
                </div></td>
                <td><img src = "${event.logo}" style="height:50px;width:50px"/></td>
                <td><button class="btn btn-primary">Show details</td>
            </tr>
            `;
            tableBody.append(row);
        }
    }).fail((err)=>{
        console.log(err);
    });

    $("#btnNewEvent").click(()=>{
        let newEvent = {
            "eventID":1004,
            "eventCode":"BS4TRN",
            "eventName":"Bootstrap 4.x Training",
            "description":"2 hours Bootstrap seminar",
            "startDate":new Date(),
            "endDate":new Date(),
            "fees":4000,
            "attendance":26,
            "logo":"images/BS.png"
        };
        
        $.ajax({
            method: "POST",
            url:"http://localhost:9090/api/events",
            contentType:"application/json",
            data: JSON.stringify(newEvent)
        }).done((data)=>{
            console.log(data);
        }).fail((err)=>{
            console.log(err);
        });
    });
});