import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import EditHeaderSection from "@/app/_components/edit/edit-header-section";
import EditExperienceSection from "@/app/_components/edit/edit-experience-section";
import EditLanguageSection from "@/app/_components/edit/edit-language-section";
import EditEducationSection from "@/app/_components/edit/edit-eduction-section";

const Sidebar = () => {


    return (
        <Sheet>
            <SheetTrigger
                className={'print:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'}
                type={'button'}>
                Edit Resume
            </SheetTrigger>
            <SheetContent className="w-[600px] overflow-y-scroll" side={"left"}>
                <SheetHeader>
                    <SheetTitle>Edit resume</SheetTitle>
                </SheetHeader>
                {/*
                    EditHeaderSection is a component that is used in the sidebar.
                    It is also used in the main resume body.
                */}


                <EditHeaderSection/>

                {/*edit experience section*/}
                <EditExperienceSection/>
                {/*edit education section*/}
                <EditEducationSection />
                {/*edit language section*/}
                <EditLanguageSection />
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;