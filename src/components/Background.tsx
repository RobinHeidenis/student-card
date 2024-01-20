import { Component } from "solid-js";
import {RiArrowsArrowLeftSLine} from "solid-icons/ri";

export const Background: Component = () => {
    const params = new URLSearchParams(window.location.search);

    return (
        <div class={"h-52 bg-background flex items-center fixed w-screen"}
             style={params.has('background') ? {"background-color": params.get('background')} : {}}>
            <div class={"flex flex-row items-center"}>
                <RiArrowsArrowLeftSLine class={"h-6 w-6 mx-4"}/>
                <h1 class={"text-2xl"}>Student card</h1>
            </div>
        </div>
    )
}