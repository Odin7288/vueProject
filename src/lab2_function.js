function displayCourseName(name){
    console.log(`Course name =${name}`)
}

const displayCourseName2 = (name) =>{
    console.log(`Course name =${name}`)
}

const displayCourseName3 = name =>{
    console.log(`Course name =${name}`)
}

const displayCourseName4 = () =>{
    console.log(`Course name = .....`)
}

const earning = (attendee) => {
    return attendee * 8000
}

const earning2 = attendee => attendee * 8000
displayCourseName("React")
displayCourseName2("React and Spring boot")
displayCourseName3("vue with rest")
displayCourseName4()
console.log(`earning1 = ${earning(10)}`)
console.log(`earning2 = ${earning2(20)}`)