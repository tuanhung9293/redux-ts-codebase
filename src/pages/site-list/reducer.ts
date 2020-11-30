import { SITE_LIST__GET } from "./action";

export type TSiteListState = Readonly<{
    list: any[];
}>;

const defaultSiteListState: TSiteListState = {
    list: [],
};

export const siteListReducer = (
    state: TSiteListState = defaultSiteListState,
    action: any,
): TSiteListState => {
    switch (action.type) {
        case SITE_LIST__GET:
            return state;

        default:
            return state;
    }
};