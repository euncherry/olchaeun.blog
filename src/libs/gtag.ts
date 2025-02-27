import { CONFIG } from 'site.config';
// 전역 window 객체에 gtag 타입 정의 추가
declare global {
  interface Window {
    gtag: (command: string, target: string, params?: Record<string, any>) => void;
  }
}
export const GA_TRACKING_ID = CONFIG.googleAnalytics.config.measurementId;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  if (typeof window !== 'object') return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: any;
  category: any;
  label: any;
  value: any;
}) => {
  if (typeof window !== 'object') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
