//randomUser
let body = document.body;

body.onload = async () => {
  let response = await fetch("https://randomuser.me/api");
  let user = await response.json();
  user = user.results[0];

  let list = document.querySelectorAll("#list");
  let nam = "name";
  
  for (key of list[0].children) {
    key.addEventListener( "mouseover" , listFunc )   
    function listFunc(e){
      nam = e.target.parentElement.id
      tag = e.target;
      tag.style.transition = "1s"
      tag.style.transform  = "rotate(360deg)";
      console.log(tag,'asd');
      for (keys in user) {
        img.src = user["picture"].large;
      }
      switch (nam) {
            case 'name':
                my.innerHTML = `Hi, My name is`;
                userName.innerHTML = `${user[nam].title} ${user["name"].first} ${user["name"].title}`;
                break;
                case 'email':
                    my.innerHTML = `My meail addres is`;
                    userName.innerHTML = `${user[nam]}`;
                break
            case 'dob':
                my.innerHTML = `My birthday is`;
                userName.innerHTML = `${user[nam].date} ${'age' + user[nam].age}`;
                break
                case 'location':
                my.innerHTML = `My addres is`;
                userName.innerHTML = `${user[nam].street["number"]} ${user[nam].street["name"]}`;
                let googleMap = document.createElement("iframe");
                googleMap.style.width = "100%";
                googleMap.style.height = "500px";
                googleMap.loading = "lazy";
                googleMap.allowfullscreen;
                googleMap.referrerpolicy = "no-referrer-when-downgrade";
                googleMap.src =  "https://www.google.com/maps/embed";
                container.appendChild(googleMap)
                break;
            case 'phone':
                my.innerHTML = `My phone number is`;
                userName.innerHTML = `${user[nam]}`;
                break;
            case 'login':
                my.innerHTML = `My password is`;
                userName.innerHTML = `${user[nam].password}`;
            default:
                break;
        }
    }
        img.src = user["picture"].large;
        userName.innerHTML = `${user[nam].title} ${user["name"].first} ${user["name"].title}`;
        my.innerHTML = `Hi, My name is`;
      
  }
};


