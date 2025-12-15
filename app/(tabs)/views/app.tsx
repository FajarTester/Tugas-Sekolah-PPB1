import { useState } from "react";
import DetailScreen from "../components/Pages/detailScreen";
import OnboardingScreen from "../components/Pages/homePage";
import LoginScreen from "../components/Pages/login";
import MenuScreen from "../components/Pages/menuScreen";

const OneScreen = () => {
    const [screen, setScreen] = useState('onboarding');
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            {screen === 'onboarding' && (
                <OnboardingScreen onComplete={() => setScreen('login')} />
            )}
            {screen === 'login' && (
                <LoginScreen onLogin={() => setScreen('menu')} />
            )}
            {screen === 'menu' && (
                <MenuScreen onSelectItem={(item: any) => {
                    setSelectedItem(item);
                    setScreen('detail');
                }} />
            )}
            {screen === 'detail' && (
                <DetailScreen
                    item={selectedItem}
                    onBack={() => setScreen('menu')}
                />
            )}
        </>
    );
};

export default OneScreen;