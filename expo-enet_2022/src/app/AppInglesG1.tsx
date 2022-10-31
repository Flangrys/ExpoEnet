import { Component, ReactNode } from "react";

type AppMemoGamePropType = {}
type AppMemoGameStateType = {}

class AppMemoGameCard extends Component<{}, {}> {
    constructor(props: any) {
        super(props)

        this.state = {} 
    }

    render(): ReactNode {
        return (
            <></>
        )
    }
}

class AppMemoGame extends Component<AppMemoGamePropType, AppMemoGameStateType> {

    /**
     * 
     * @param props 
     */
    constructor(props: any) {
        super(props)

        this.state = {}
    }

    /**
     * This function work as main method to set the game state and shuffle cards board. 
     * @author Flangrys
     * @return {void}
     */
    initGame(): void {}

    /**
     * This function has a unique propose, shuffle cards and assign `flipCards()` as svcallback at `onClick` event.
     * @author Flangrys
     * @return {void}
     */
    shuffleCards(): void {}

    /**
     * This function is used as callback on events `React.DOMAttributes<T>.onClick()`.
     * @author Flangrys
     * @return {void}
     */
    flipCard(): void {}

    /**
     * This fucntion check the state of all cards
     *  * Flipped cards
     *  * Cards taken
     *  * Wrong cards tries
     *  * Corret cards tries
     *  * etc
     * @author Flangrys
     * @return {void}
     */
    checkFlip(): void {}


    render(): ReactNode {
        return (
            <>
                <div className="d-flex playground">
                    <h1>algo</h1>
                </div>
            </>
        )
    }
}

export default AppMemoGame