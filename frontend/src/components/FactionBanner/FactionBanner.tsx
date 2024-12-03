import { useNavigate } from 'react-router-dom';
import styles from './FactionBanner.module.css';

interface FactionBannerProps {
  faction: string;
}

const FactionBanner = ({ faction }: FactionBannerProps) => {
  const navigate = useNavigate();

  const handleReDirectFaction = () => {
    navigate(`/faction/${faction}`);
  };

  return (
    <div className={styles.factionBanner} onClick={handleReDirectFaction}>
      {faction}
    </div>
  );
};

export default FactionBanner;
