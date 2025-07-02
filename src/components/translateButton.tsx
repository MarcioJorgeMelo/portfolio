import translateEnglish from "../../public/translateEnglish.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftRight } from "lucide-react";

const TranslateButton = () => {
    return (
        <div className="fixed bottom-24 right-6 z-50">
            <Button variant="translate" size="translate">
                <Image
                    src={translateEnglish}
                    alt="Bandeira dos EUA"
                    className="size-6 rounded-full"
                />

                <ArrowLeftRight className="size-5" color="#FFF" />
            </Button>
        </div>
    );
}

export default TranslateButton;