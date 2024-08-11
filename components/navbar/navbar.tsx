"use"
import { links } from "@/public/navdata"
import { RoundedDrawerNav } from "../navbar/roundedDrawerNav/roundedDrawerNav"
import { NeuHero } from "../hero/hero";
export const RoundedDrawerNavExample = () => {

    return (
        <div className="bg-neutral-950 ">
            <RoundedDrawerNav
                links={links}
                navBackground="bg-neutral-950"
                bodyBackground="bg-white"
            >
                <div className=" items-center justify-center">
                    <div> < NeuHero /></div>
                </div>
            </RoundedDrawerNav>
        </div>
    );
};




