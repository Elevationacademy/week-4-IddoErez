

const wisdom = []
let input
let texts = JSON.parse(localStorage.wisdom || "[]")

if (texts) {
    for (let t of texts) {
        $("#posts").append(`<div class="line-delete" data-id="${t.text}"><i class="delete"></i><span>${t.text}</span></div>`)
    }
}

let isInside
let p
let counter =0
$("#btn").on("click", function () {
    counter++
    $("#posts").empty()
    input = $("input").val()
    $("#posts").append(`<div>${input}</div>`)
    wisdom.push({ "text": input })
    $("input").val("")
    if (!(counter % 2 == 0)) {
        if (localStorage.wisdom) {
            p = JSON.parse(localStorage.wisdom)
            for (let i in wisdom) {
                isInside = false
                for (let j in p) {
                    if (p[j].text === wisdom[i].text) {
                        isInside = true
                    }
                }
                if (!isInside) {
                    p.push(wisdom[i])
                }
            }
            localStorage.wisdom = JSON.stringify(p)
        } else {
            localStorage.wisdom = JSON.stringify(wisdom)
        }
             
    

    }
})

$("#clr").on("click", function () {
     localStorage.removeItem("wisdom")
     $("#posts").empty()
 })


$("#posts").on("click", ".delete", function () {
    $(this).closest(".line-delete").remove()
    let id = $(this).closest(".line-delete").data().id
    let storage = JSON.parse(localStorage.wisdom)
    for (let i in storage) {
        if (storage[i].text == id) {
            storage.splice(i, 1)
        }
    }
    localStorage.wisdom = JSON.stringify(storage)
})








