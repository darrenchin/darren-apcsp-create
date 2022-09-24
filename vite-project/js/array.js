const items = [
  {
    problem:
      "Sarah has 100 marbles. Dan has 50 marbles less than Sarah. How many marbles do they have altogether?",
    solution: 150,
    unit: "marbles",
  },
  {
    problem:
      "Diego baked 50 cakes. Sandra baked twice as many cakes as Diego. How many cakes did Sandra bake?",
    solution: 100,
    unit: "cakes",
  },
  {
    problem:
      "Ryan bought his computer for $1200. Two years later, he sold his computer for $800. How much money did he lose?",
    solution: 400,
    unit: "dollars",
  },
  {
    problem:
      "Justin bought a $20000 car. However, he only had $13000 on him and had to request a loan from the bank. How much money did he request from the bank?",
    solution: 7000,
    unit: "dollars",
  },
  {
    problem:
      "Eric walked 5km to his school. He then walked 2km to the bakery and then 4km home. How many kilomters did Eric walk today?",
    solution: 11,
    unit: "kilometers",
  },
  {
    problem:
      "Henry drank 2 cups of water. Sandy drank 5 cups of water. How many cups of water did both of them drink?",
    solution: 7,
    unit: "cups",
  },
  {
    problem:
      "Olivia bought a hotdog and a soda, which costs $6 in total. The hotdog costs 2 times as much as the soda. How much does the hotdog cost?",
    solution: 4,
    unit: "dollars",
  },
  {
    problem:
      "Joanne bought 10 seal plushies for $50. She resold each of them for $10. How much did she profit from reselling the plushies?",
    solution: 50,
    unit: "dollars",
  },
  {
    problem:
      "Susmoy played Valorant(a video game) for 3 hours. Ethan was able to play 2 times as much as Susmoy today. How many hours did both of them play combined?",
    solution: 9,
    unit: "hours",
  },
  {
    problem:
      "Natalie ate 5 pieces of candy. Miki ate 3 pieces of candy. How much candy did both eat in total?",
    solution: 8,
    unit: "pieces",
  },
  {
    problem:
      "Matthew gave his dog 10 treats. Each treat costs 50 cents. How much money worth of treats did he give his dog?",
    solution: 5,
    unit: "dollars",
  },
  {
    problem:
      "Edmund bought a $500 phone. However, it cracked and he had to go to repair it. It costs half as much to repair the phone than to buy it. How much money did he spend on the phone in total?",
    solution: 750,
    unit: "dollars",
  },
  {
    problem:
      "Ryan bought $100 worth of in-game purchases. However, he had a gift card with a balance of $50 and used it on the purchase. How much money did he actually spend on the purchase?",
    solution: 50,
    unit: "dollars",
  },
  {
    problem:
      "Jed had $46 in his wallet. Unfortunately, someone stole half of the money. How much money does Jed have left in the wallet?",
    solution: 23,
    unit: "dollars",
  },
  {
    problem:
      "Jack threw three basketballs in the hoop. However, only one made it in. Carmin also threw 3 basketballs in the hoop. However, all of them made it in. How many more hoops was Carmin able to score than Jack?",
    solution: 2,
    unit: "hoops",
  },
];

// problems.forEach((question) => console.log(question));

let i = 0;
function chooseProblem(p) {
  let problem = items[i];
  problem += `<div class="problem-box">
    <h1 class="problem-name">${p[i].problem}</h1>
    <input type = "text" class="problem-submit"></input>
    <h3 class="problem-unit">${p[i].unit}</h3>
    </div>`;

  return problem;
}
console.log(chooseProblem(items));
document.querySelector(".display").innerHTML += `${chooseProblem(items)}`;

// function displayProblem(items) {
//   items.forEach((item) =>
//     document.getElementById("display").insertAdjacentHTML(
//       "beforeend",
//       `<div class="problem-box">
//     <h1 class="problem-name">${item.problem}</h1>
//     <h2 class="problem-submit">${item.solution}</h2>
//     <h3 class="problem-unit">${item.unit}</h3>
//     </div>`
//     )
//   );
// }

// window.addEventListener("load", function () {
//   displayProblem(items);
//   console.log("check");
// });

const btn = document.getElementById("nextbtn");

function nextProblem() {
  let problem = items[i];
  btn.addEventListener("click", function () {
    let useranswer = document.querySelector(".problem-submit").value;
    console.log(useranswer);
    console.log("working");
    console.log(i);
    if ((useranswer = problem.solution)) {
      console.log("Your answer is correct");
    } else {
      console.log("Your answer is wrong");
    }
    i++;
    document.querySelector(".display").innerHTML = "";
    document.querySelector(".display").innerHTML += `${chooseProblem(items)}`;
  });
}
nextProblem();
