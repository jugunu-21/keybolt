
import {links} from "@/public/navdata"
import {RoundedDrawerNav} from "../navbar/roundedDrawerNav/roundedDrawerNav"
import { Hero } from "../hero/hero";
export const RoundedDrawerNavExample = () => {

    return (
        <div className="bg-neutral-950 ">
            <RoundedDrawerNav
                links={links}
                navBackground="bg-neutral-950"
                bodyBackground="bg-white"
            >
                <div className="flex flex-col items-center justify-center">
                    <div> <Hero/></div>
                   
                   
                </div>
            </RoundedDrawerNav>
        </div>
    );
};




