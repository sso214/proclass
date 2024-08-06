import * as S from './AppDownloadDialog.styles';
import { Dialog } from '@/common/components';

export default function AppDownloadDialog() {
  return (
      <Dialog
          style={{width: 600}}
          title='앱 다운로드'
          contents={
            <ul css={S.appList}>
              <li>
                <img src='/images/qr-ios.png' alt='App Store'/>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img src='/images/app-store.png' alt='app store'/>
                  <p>App Store</p>
                </a>
              </li>
              <li>
                <img src='/images/qr-google.png' alt='Google Play'/>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img src='/images/google-play.png' alt='google play'/>
                  <p>Google Play</p>
                </a>
              </li>
            </ul>
          }
      />
  )
}
