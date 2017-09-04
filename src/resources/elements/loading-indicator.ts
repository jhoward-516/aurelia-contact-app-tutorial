import * as NProgress from 'nprogress';
import { bindable, noView } from 'aurelia-framework';

@noView(['nprogress/nprogress.css'])
export class LoadingIndicator {
    @bindable loading = false;

    loadingChanged(newValue) {
        if (newValue) {
            NProgress.start();
        } else {
            NProgress.done();
        }
    }
}