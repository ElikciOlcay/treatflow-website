import DemoFirstActions from "./DemoFirstActions";
import { getDemoFirstCopy } from "@/lib/cta/demoFirst";

export default function CTASection() {
    const copy = getDemoFirstCopy("de");
    return (
        <section className="py-20 bg-indigo-600">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {copy.closingTitle}
                </h2>
                <p className="text-lg text-indigo-100 mb-8">
                    {copy.closingText}
                </p>
                <DemoFirstActions
                    location="footer"
                    tone="onDark"
                    align="center"
                    showDemoNote
                    showTrialDetail
                />
            </div>
        </section>
    );
}
