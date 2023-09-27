import { $ } from "@wdio/globals";
import Page from "../page.js";

export class ApplicationForm extends Page {
    get name() {
        return $('>>>ak-form-element-horizontal input[name="name"]');
    }

    get uiSettings() {
        return $('>>>ak-form-group button[aria-label="UI Settings"]');
    }

    get launchUrl() {
        return $('>>>input[name="metaLaunchUrl"]');
    }
}

export default new ApplicationForm();
