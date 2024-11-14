import animationData from '../assets/animation.json';
import Lottie from 'react-lottie';

export default function Loading(){

    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return(
        <div>
            <Lottie options={options} height={700} width={700} />
        </div>
    )
}