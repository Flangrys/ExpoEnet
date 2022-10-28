import { Component, ReactNode } from "react";
import CommonFooter from "../components/common/Footer";
import CommonNavbar from "../components/common/Navbar";

let CardsDeck = [
    {
        id: 1,
        name: "Sapo",
        color: "#84CFFA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069170.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
    {
        id: 2,
        name: "Vaca",
        color: "#FA8484",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069162.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
    {
        id: 3,
        name: "Canguru",
        color: "#E984FA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069163.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
    {
        id: 4,
        name: "Leão",
        color: "#84FAAC",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069169.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
    {
        id: 5,
        name: "Pássaro",
        color: "#8684FA",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069186.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
    {
        id: 6,
        name: "Elefante",
        color: "#F7FA84",
        imagem: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
        descricao: ["descricao 1", "descricao 2", "descricao 3"],
        virado: true,
    },
]

class AppMemoGame extends Component {

    gameCards = document.querySelectorAll(".pr-cards") // Card Selector
    
    hasFlippedCard: boolean = false;
    lockBoard: boolean = false;

    firstCardTaken: any
    secondCardTaken: any

    gameMovements: number = 0
    gameWinConter: number = 0

    constructor(props: any) {
        super(props)
    }

    flipCard(): void {
        if (this.lockBoard) return

        if (this === this.firstCardTaken) return

        // this.cardList.add("flip")

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCardTaken = this

            return
        }

        this.secondCardTaken = this

        console.log(`[~] WinConter ${this.gameWinConter}`)

        // this.checkForMatch()
    }

    shuffleCards(): void {
        CardsDeck.forEach(
            card => {
                let deckRandomPos = Math.floor(Math.random() * 12)
                card.style.order = deckRandomPos
            }
        )
    }

    checkForMatch(): void {
        if (this.firstCardTaken.dataset.nome !== this.secondCardTaken.dataset.nome) {
            this.gameMovements++
        }

        document.getElementById("gm-movements-1").innerHTML = `${this.gameMovements}`
        document.getElementById("gm-movements-2").innerHTML = `${this.gameMovements}`

        if (this.firstCardTaken.datase.nome === this.secondCardTaken.dataset.nome) {
            this.gameWinConter++

            // disableCards()

            if (this.gameWinConter == 6) {
                setTimeout(() => {
                        document.querySelector("#gm-victory").style.display = 'block'
                        document.querySelector("#gm-movements-total")?.innerHTML = this.gameMovements
                }, 1000)
            }

            return
        }

        // unflipCards()

        console.log(`[~] Movements ${this.gameMovements}`)
    }

    componentDidMount(): void {
            this.shuffleCards()
    }

    render(): ReactNode {
        return (
            <>
                <div className="container">

                    <CommonNavbar elementActive={0}/>

                    <CommonFooter/>

                </div>
            </>
        )
    }
}

export default AppMemoGame