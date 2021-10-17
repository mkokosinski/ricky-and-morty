import './DetailPanel.scss';

type Props = {
  label: string,
  value: string
};

const DetailPanel = ({ label, value }: Props) => (
  <div className="detail-panel">
    <span className="detail-panel__label">{label}</span>
    <span className="detail-panel__value">{value}</span>
  </div>
);

export default DetailPanel;
