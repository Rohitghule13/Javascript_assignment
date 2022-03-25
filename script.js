// Globle Array for Person Info //

var Arr_person = [];

// ===== json fetch ===== //

fetch("https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5").then(
    res => {
        res.json().then(
            data => {
                console.log(data[0]);
                if (data.length > 0) {
                    var temp = "";
                    var i = 0;
                    data.forEach((itemData) => {
                        var add_value = {};
                        temp += `<tr id="obj${i}" onclick="addEventListener('click',greeting('${itemData.first_name}'),rightSide(${i}))"><td>${itemData.first_name}</td>
                        <td>${itemData.last_name}</td>
                        <td>${itemData.username}</td>
                        <td>${itemData.employment.title}</td>
                        <td>${itemData.address.country}</td>
                        <td><button onclick="greeting('${itemData.first_name}'),rightSide(${i})">view</button>
                        <button onclick="removePerson('obj${i}',${i}),rightSide(${i})">Remove</button></td></tr>`;
                        add_value.id = itemData.id;
                        add_value.uid = itemData.uid;
                        add_value.first_name = itemData.first_name;
                        add_value.last_name = itemData.last_name;
                        add_value.employment = itemData.employment;
                        add_value.address = itemData.address;
                        add_value.credit_card = itemData.credit_card;
                        add_value.subscription = itemData.subscription;
                        add_value.avatar = itemData.avatar;
                        add_value.email = itemData.email;
                        add_value.date_of_birth = itemData.date_of_birth;
                        add_value.username = itemData.username;
                        add_value.phone_number = itemData.phone_number;
                        Arr_person.push(add_value);
                        i += 1;
                    });
                    document.getElementById('data').innerHTML = temp;
                    rightSide(0);
                    greeting(Arr_person[0].first_name);
                }
            }
        )
    }
)

// ==== Right side of card ====//


function rightSide(arr_no) {
    var html = "";
    html = `<tr>
                    <th>Id</th>
                    <td>${Arr_person[arr_no].id}</td>
                    </tr>
                    <tr>
                    <th>Name</th>
                    <td>${Arr_person[arr_no].first_name} ${Arr_person[arr_no].last_name}</td>
                    </tr>
                    <tr>
                    <th>Username</th>
                    <td>${Arr_person[arr_no].username}</td>
                    </tr>
                    <tr>
                    <th>Email Id</th>
                    <td>${Arr_person[arr_no].email}</td>
                    </tr>
                    <th>Phone Number</th>
                    <td>${Arr_person[arr_no].phone_number}</td>
                    </tr>
                    <tr>
                    <th>Date of Birth</th>
                    <td>${Arr_person[arr_no].date_of_birth}</td>
                    </tr>
                    <tr>
                    <th>Employment</th>
                    <td>${Arr_person[arr_no].employment.title},[${Arr_person[arr_no].employment.key_skill}]</td>
                    </tr>
                    <th>Address</th>
                    <td>${Arr_person[arr_no].address.city},${Arr_person[arr_no].address.state},${Arr_person[arr_no].address.country}</td>
                    </tr>
                    <tr>
                    <th>Credit Card</th>
                    <td>${Arr_person[arr_no].credit_card.cc_number}</td>
                    </tr>
                    <tr>
                    <th>Subscription</th>
                    <td>${Arr_person[arr_no].subscription.status}</td>
                    </tr>`
    document.getElementById('right_side_card').innerHTML = html;
    document.getElementById('avatar').src = Arr_person[arr_no].avatar;

}
// ==== highlighter ==== //

/*function highlight(id) {
    document.getElementById(id).style.backgroundColor = "yellow";
}*/
// ===== greeting function =====//

function greeting(value) {
    //console.log(id);
    const time = new Date();
    const hur = time.getHours();
    //highlight(id);
    if (hur > 5 && hur < 12) {
        document.getElementById('greetings').innerHTML = "Good Morning! " + value;

    } else if (hur > 12 && hur < 16) {
        document.getElementById('greetings').innerHTML = "Good Afternoon! " + value;

    } else {
        document.getElementById('greetings').innerHTML = "Good Evening! " + value;

    }
}


// ==== remove from array ==== //

function removePerson(row_no, i) {
    alert("Are you sure want to remove " + Arr_person[i].first_name + " " + Arr_person[i].last_name);
    Arr_person.pop(i);
    document.getElementById(row_no).remove();

}