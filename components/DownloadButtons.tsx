export const APK_URL = "";
export const APP_VERSION = "2.0.6";

export function DownloadButtons({ centered = false }: { centered?: boolean }) {
  return (
    <div className="dl-row" style={centered ? { justifyContent: "center" } : undefined}>
      <a href={APK_URL} className="btn-apk">
        <span className="btn-ic"></span>
        <span className="btn-txt">
          <small>Available for</small>
          <strong>Android APK</strong>
        </span>
      </a>
      <span className="btn-ios" aria-disabled="true">
        <span className="btn-ic"></span>
        <span className="btn-txt">
          <small>Planned support</small>
          <strong>iPhone</strong>
        </span>
      </span>
    </div>
  );
}
