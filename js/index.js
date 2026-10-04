var avatarInput = document.getElementById('avatarInput')
var changePhotoBtn = document.getElementById('changePhotoBtn')
var contactName = document.getElementById('contactName')
var contactPhone = document.getElementById('contactPhone')
var contactEmail = document.getElementById('contactEmail')
var contactAddress = document.getElementById('contactAddress')
var contactGroup = document.getElementById('contactGroup')
var contactNotes = document.getElementById('contactNotes')
var contactFavorite = document.getElementById('contactFavorite')
var contactEmergency = document.getElementById('contactEmergency')

var contactId = document.getElementById('contactId')
var rowData = document.getElementById('rowData')
var contactList = JSON.parse(localStorage.getItem('contacts')) || [];

DisplayContact();


function AddContact() {
    var avatar;
    // if(changePhotoBtn.file['0']){
    //     `images/${changePhotoBtn.file['0'].name}`;
    // } else {
    //     avatar = "contactName."
    // }
    var NewContact = {
        img: avatar,
        name: contactName.value,
        number: contactPhone.value,
        email: contactEmail.value,
        address: contactAddress.value,
        type: contactGroup.value,
        note: contactNotes.value,
        fav: contactFavorite.value,
        emergrncy: contactEmergency.value,
    }
    contactList.push(NewContact)
    localStorage.setItem("contacts", JSON.stringify(contactList))
    ClearAllData()
    DisplayContact()
    console.log('contactList')
}

function ClearAllData() {
    contactName.value = '';
    contactPhone.value = '';
    contactEmail.value = '';
    contactAddress.value = '';
    contactGroup.value = '';
    contactNotes.value = '';
    contactFavorite.value = '';
    contactEmergency.value = '';
}

function DisplayContact() {
    var box = '';
    for (var i = 0; i < contactList.length; i++) {
        box += `<div class="col-md-6">
                  <div class="contact-card">
                    <div class="contact-header">
                      <div class="contact-avatar bg-primary favorite emergency">${contactList[i].name[0]}</div>
                      <div class="contact-info">
                        <h4>${contactList[i].name}</h4>
                      </div>
                    </div>
                    <div class="contact-details">
                      <div class="contact-detail phone">
                        <i class="fas fa-phone"></i>
                        <span>${contactList[i].number}</span>
                      </div>
                      <div class="contact-detail email">
                        <i class="fas fa-envelope"></i>
                        <span>${contactList[i].email}</span>
                      </div>
                      <div class="contact-detail address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${contactList[i].address}</span>
                      </div>
                    </div>
                    <div class="contact-tags">
                      <span class="tag family">${contactList[i].type}</span>
                      <span class="tag emergency">
                        <i class="fas fa-heartbeat"></i> Emergency
                      </span>
                    </div>
                    <div class="contact-actions">
                      <button class="contact-action call" title="Call">
                        <i class="fas fa-phone"></i>
                      </button>
                      <button onclick="${contactList[i].email}" class="contact-action email" title="Email">
                        <i class="fas fa-envelope"></i>
                      </button>
                      <button onclick="${toggleFavorite()}" class="contact-action favorite active" title="Favorite">
                        <i class="fas fa-star"></i>
                      </button>
                      <button onclick="${toggleEmergency()}" class="contact-action emergency active" title="Emergency">
                        <i class="fas fa-heart"></i>
                      </button>
                      <button onclick="editContact(${i})" class="contact-action" title="Edit">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button onclick="deleteContact(${i})" class="contact-action delete" title="Delete">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>`}
    rowData.innerHTML = box;
}

function deleteContact(index){
    contactList.splice(index,1);
    localStorage.setItem("contacts", JSON.stringify(contactList))
    DisplayContact()
}

function editContact(index){
    contactName.value = contactList[index].name
    contactPhone.value = contactList[index].number
    contactEmail.value = contactList[index].email
    contactAddress.value = contactList[index].address
    contactGroup.value = contactList[index].type
    contactNotes.value = contactList[index].note
}

function toggleFavorite(){

}

function toggleEmergency(){

}


