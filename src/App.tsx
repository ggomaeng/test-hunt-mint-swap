import { useState } from "react";
import { HuntBuildingsModal, MintSwapModal } from "hunt-mint-swap";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import "hunt-mint-swap/style.css";
import { Providers } from "./providers/WagmiProvider";

function App() {
  const [isOpenHunt, setIsOpenHunt] = useState(false);
  const [isOpenMintSwap, setIsOpenMintSwap] = useState(false);
  return (
    <Providers>
      <div>
        <div>
          <button onClick={() => setIsOpenHunt(true)}>Open HUNT</button>
          <button onClick={() => setIsOpenMintSwap(true)}>Open MintSwap</button>
        </div>
        <HuntBuildingsModal
          isOpen={isOpenHunt}
          onClose={() => setIsOpenHunt(false)}
        />
        <MintSwapModal
          isOpen={isOpenMintSwap}
          onClose={() => setIsOpenMintSwap(false)}
        />
      </div>
    </Providers>
  );
}

export default App;
