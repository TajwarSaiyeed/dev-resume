import React, {Dispatch, DispatchWithoutAction} from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import EditHeaderSection from "@/app/_components/edit/edit-header-section";
import {HeaderProps} from "@/types";

type SidebarProps = {
    header: HeaderProps
    dispatch: Dispatch<any>
}

const Sidebar = ({header, dispatch} : SidebarProps ) => {
    return (
        <Sheet>
            <SheetTrigger
                className={'print:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'}
                type={'button'}>
                Edit Resume
            </SheetTrigger>
            <SheetContent className="w-[600px]" side={"left"}>
                <SheetHeader>
                    <SheetTitle>Edit resume</SheetTitle>
                </SheetHeader>
                {/*edit header section
github
linkedin
portfolio
                */}
                <EditHeaderSection
                    headerData={header}
                    dispatch={dispatch}
                />

            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;