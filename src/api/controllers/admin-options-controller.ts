import { PageOptionItemEntity, Pageable, OptionItemEntity } from "../../types/common.types";
import { $api } from "..";

export const getSettings = (pageable: Pageable) => {
    return $api.get<PageOptionItemEntity>(`/admin/settings/?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort}`);
}

export const addSettings = (options: OptionItemEntity) => {
    return $api.post<OptionItemEntity>("/admin/settings/", options);
}