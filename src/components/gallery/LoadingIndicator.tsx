type LoadingIndicatorProps = {
  loading?: boolean;
}

export function LoadingIndicator({loading = true}: LoadingIndicatorProps) {
  if (!loading) {
    return null;
  }
  return (
    <div className="loading-indicator">
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="translate(12, 12) scale(0)">
          <animateTransform id="spinner_g88x" begin="0;spinner_yOmw.begin+0.6s" attributeName="transform"
                            calcMode="spline" type="translate" dur="1.2s" values="12 12;0 0"
                            keySplines=".52,.6,.25,.99"></animateTransform>
          <animateTransform begin="0;spinner_yOmw.begin+0.6s" attributeName="transform" calcMode="spline" additive="sum"
                            type="scale" dur="1.2s" values="0;1" keySplines=".52,.6,.25,.99"></animateTransform>
          <animate begin="0;spinner_yOmw.begin+0.6s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0"
                   keySplines=".52,.6,.25,.99"></animate>
        </path>
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="translate(12, 12) scale(0)">
          <animateTransform id="spinner_yOmw" begin="spinner_g88x.begin+0.6s" attributeName="transform"
                            calcMode="spline" type="translate" dur="1.2s" values="12 12;0 0"
                            keySplines=".52,.6,.25,.99"></animateTransform>
          <animateTransform begin="spinner_g88x.begin+0.6s" attributeName="transform" calcMode="spline" additive="sum"
                            type="scale" dur="1.2s" values="0;1" keySplines=".52,.6,.25,.99"></animateTransform>
          <animate begin="spinner_g88x.begin+0.6s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0"
                   keySplines=".52,.6,.25,.99"></animate>
        </path>
      </svg>
    </div>
  );
}