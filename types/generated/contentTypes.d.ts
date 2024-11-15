import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiArtikelArtikel extends Struct.CollectionTypeSchema {
  collectionName: 'artikels';
  info: {
    singularName: 'artikel';
    pluralName: 'artikels';
    displayName: 'Artikel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TitleArtikel: Schema.Attribute.String & Schema.Attribute.Required;
    FeaturedImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ExcerptArtikel: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 130;
      }>;
    penulis_artikel: Schema.Attribute.Relation<
      'manyToOne',
      'api::penulis-artikel.penulis-artikel'
    >;
    TglArtikel: Schema.Attribute.Date & Schema.Attribute.Required;
    kategori_artikel: Schema.Attribute.Relation<
      'manyToOne',
      'api::kategori-artikel.kategori-artikel'
    >;
    tag_artikels: Schema.Attribute.Relation<
      'manyToMany',
      'api::tag-artikel.tag-artikel'
    >;
    TotalViewArtikel: Schema.Attribute.Integer;
    SumberFoto: Schema.Attribute.String & Schema.Attribute.Required;
    ArtikelSlug: Schema.Attribute.UID<'TitleArtikel'> &
      Schema.Attribute.Required;
    DetailArtikel: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artikel.artikel'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiBerandaHeroSectionBerandaHeroSection
  extends Struct.SingleTypeSchema {
  collectionName: 'beranda_hero_sections';
  info: {
    singularName: 'beranda-hero-section';
    pluralName: 'beranda-hero-sections';
    displayName: 'berandaHeroSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    berandaHeroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Panggil Tukang dari Rumah kapanpun'>;
    berandaHeroSubtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mudah, Cepat, dan Terpercaya'>;
    berandaHeroButton1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Download'>;
    berandaHeroButton2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tentang Kami'>;
    berandaHeroVideo: Schema.Attribute.Media<'videos'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::beranda-hero-section.beranda-hero-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiCaraPesanCaraPesan extends Struct.CollectionTypeSchema {
  collectionName: 'cara_pesans';
  info: {
    singularName: 'cara-pesan';
    pluralName: 'cara-pesans';
    displayName: 'caraPesan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caraPesanNo: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
        },
        number
      >;
    caraPesanTitle: Schema.Attribute.String & Schema.Attribute.Required;
    caraPesanSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cara-pesan.cara-pesan'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiDownloadSectionDownloadSection
  extends Struct.SingleTypeSchema {
  collectionName: 'download_sections';
  info: {
    singularName: 'download-section';
    pluralName: 'download-sections';
    displayName: 'DownloadSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    DownloadTitle: Schema.Attribute.String & Schema.Attribute.Required;
    DownloadSubtitleAtas: Schema.Attribute.String & Schema.Attribute.Required;
    DownloadSubtitleBawah: Schema.Attribute.String & Schema.Attribute.Required;
    DownloadLink: Schema.Attribute.String & Schema.Attribute.Required;
    DownloadImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::download-section.download-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqMitraFaqMitra extends Struct.CollectionTypeSchema {
  collectionName: 'faq_mitras';
  info: {
    singularName: 'faq-mitra';
    pluralName: 'faq-mitras';
    displayName: 'FAQMitra';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FAQMitraPertanyaan: Schema.Attribute.String;
    FAQMitraJawaban: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-mitra.faq-mitra'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqUserFaqUser extends Struct.CollectionTypeSchema {
  collectionName: 'faq_users';
  info: {
    singularName: 'faq-user';
    pluralName: 'faq-users';
    displayName: 'FAQUser';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FAQUserPertanyaan: Schema.Attribute.String & Schema.Attribute.Required;
    FAQUserJawaban: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-user.faq-user'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiHubungiKamiSectionHubungiKamiSection
  extends Struct.SingleTypeSchema {
  collectionName: 'hubungi_kami_sections';
  info: {
    singularName: 'hubungi-kami-section';
    pluralName: 'hubungi-kami-sections';
    displayName: 'HubungiKamiSection';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    HubungiKamiTitle: Schema.Attribute.String & Schema.Attribute.Required;
    HubungiKamiSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    HubungiKamiButton: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hubungi-kami-section.hubungi-kami-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKarirAlasanBergabungListSectionKarirAlasanBergabungListSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'karir_alasan_bergabung_list_sections';
  info: {
    singularName: 'karir-alasan-bergabung-list-section';
    pluralName: 'karir-alasan-bergabung-list-sections';
    displayName: 'KarirAlasanBergabungListSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AlasanNo: Schema.Attribute.Integer & Schema.Attribute.Required;
    AlasanBergabung: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::karir-alasan-bergabung-list-section.karir-alasan-bergabung-list-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKarirAlasanBergabungSectionKarirAlasanBergabungSection
  extends Struct.SingleTypeSchema {
  collectionName: 'karir_alasan_bergabung_sections';
  info: {
    singularName: 'karir-alasan-bergabung-section';
    pluralName: 'karir-alasan-bergabung-sections';
    displayName: 'KarirAlasanBergabungSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AlasanTitle: Schema.Attribute.String & Schema.Attribute.Required;
    AlasanImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::karir-alasan-bergabung-section.karir-alasan-bergabung-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKarirHeroSectionKarirHeroSection
  extends Struct.SingleTypeSchema {
  collectionName: 'karir_hero_sections';
  info: {
    singularName: 'karir-hero-section';
    pluralName: 'karir-hero-sections';
    displayName: 'KarirHeroSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    KarirTitle: Schema.Attribute.String & Schema.Attribute.Required;
    KarirSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    KarirButton: Schema.Attribute.String & Schema.Attribute.Required;
    KarirImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::karir-hero-section.karir-hero-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKategoriArtikelKategoriArtikel
  extends Struct.CollectionTypeSchema {
  collectionName: 'kategori_artikels';
  info: {
    singularName: 'kategori-artikel';
    pluralName: 'kategori-artikels';
    displayName: 'KategoriArtikel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    NamaKategori: Schema.Attribute.String & Schema.Attribute.Required;
    SlugKategori: Schema.Attribute.String & Schema.Attribute.Required;
    artikels: Schema.Attribute.Relation<'oneToMany', 'api::artikel.artikel'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kategori-artikel.kategori-artikel'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKategoriLayananKategoriLayanan
  extends Struct.CollectionTypeSchema {
  collectionName: 'kategori_layanans';
  info: {
    singularName: 'kategori-layanan';
    pluralName: 'kategori-layanans';
    displayName: 'KategoriLayanan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    NamaKategori: Schema.Attribute.String & Schema.Attribute.Required;
    layanans: Schema.Attribute.Relation<'oneToMany', 'api::layanan.layanan'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kategori-layanan.kategori-layanan'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKebijakanPrivasiKebijakanPrivasi
  extends Struct.CollectionTypeSchema {
  collectionName: 'kebijakan_privasis';
  info: {
    singularName: 'kebijakan-privasi';
    pluralName: 'kebijakan-privasis';
    displayName: 'KebijakanPrivasi';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SubtitleKebijakanPrivasi: Schema.Attribute.String;
    UpdatedKebijakanPrivasi: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2024-10-25'>;
    PoinIntiPerubahanKebijakanPrivasi: Schema.Attribute.String &
      Schema.Attribute.Required;
    DetailKebijakanPrivasi: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kebijakan-privasi.kebijakan-privasi'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKenapaMemilihKamiSectionKenapaMemilihKamiSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'kenapa_memilih_kami_sections';
  info: {
    singularName: 'kenapa-memilih-kami-section';
    pluralName: 'kenapa-memilih-kami-sections';
    displayName: 'KenapaMemilihKamiSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    KenapaMemilihKamiTitle: Schema.Attribute.String & Schema.Attribute.Required;
    KenapaMemilihKamiSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required;
    KenapaMemilihKamiIcon: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kenapa-memilih-kami-section.kenapa-memilih-kami-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiKontakSectionKontakSection extends Struct.SingleTypeSchema {
  collectionName: 'kontak_sections';
  info: {
    singularName: 'kontak-section';
    pluralName: 'kontak-sections';
    displayName: 'KontakSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    KontakTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Kontak Kami'>;
    KontakSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan sepenuh hati.'>;
    KontakHP: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    KontakEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    KontakLocation: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kontak-section.kontak-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiLayananLayanan extends Struct.CollectionTypeSchema {
  collectionName: 'layanans';
  info: {
    singularName: 'layanan';
    pluralName: 'layanans';
    displayName: 'Layanan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    NamaLayanan: Schema.Attribute.String & Schema.Attribute.Required;
    kategori_layanan: Schema.Attribute.Relation<
      'manyToOne',
      'api::kategori-layanan.kategori-layanan'
    >;
    ExcerptLayanan: Schema.Attribute.String & Schema.Attribute.Required;
    DetailLayanan: Schema.Attribute.Blocks & Schema.Attribute.Required;
    IkonLayanan: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    BackgroundLayanan: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::layanan.layanan'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiLayananHeroSectionLayananHeroSection
  extends Struct.SingleTypeSchema {
  collectionName: 'layanan_hero_sections';
  info: {
    singularName: 'layanan-hero-section';
    pluralName: 'layanan-hero-sections';
    displayName: 'LayananHeroSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    LayananHeroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    LayananHeroSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    LayananHeroButton: Schema.Attribute.String & Schema.Attribute.Required;
    LayananHeroImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::layanan-hero-section.layanan-hero-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiLokasiLayananSectionLokasiLayananSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'lokasi_layanan_sections';
  info: {
    singularName: 'lokasi-layanan-section';
    pluralName: 'lokasi-layanan-sections';
    displayName: 'LokasiLayananSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    KotaLayanan: Schema.Attribute.String & Schema.Attribute.Required;
    LatitudeKota: Schema.Attribute.Decimal & Schema.Attribute.Required;
    LongitudeKota: Schema.Attribute.Decimal & Schema.Attribute.Required;
    DeskripsiPerLokasi: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lokasi-layanan-section.lokasi-layanan-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiLowonganKerjaLowonganKerja
  extends Struct.CollectionTypeSchema {
  collectionName: 'lowongan_kerjas';
  info: {
    singularName: 'lowongan-kerja';
    pluralName: 'lowongan-kerjas';
    displayName: 'LowonganKerja';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    RoleKerja: Schema.Attribute.String & Schema.Attribute.Required;
    DivisiKerja: Schema.Attribute.String & Schema.Attribute.Required;
    StatusLowongan: Schema.Attribute.Enumeration<['open', 'closed']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'closed'>;
    TipePekerjaan: Schema.Attribute.Enumeration<
      ['Fulltime', 'Freelance', 'Part-time', 'Internship', 'Mitra']
    > &
      Schema.Attribute.Required;
    LokasiPekerjaan: Schema.Attribute.String & Schema.Attribute.Required;
    JamKerja: Schema.Attribute.String & Schema.Attribute.Required;
    HariKerja: Schema.Attribute.String & Schema.Attribute.Required;
    MinimalPengalaman: Schema.Attribute.String & Schema.Attribute.Required;
    TglPosting: Schema.Attribute.Date & Schema.Attribute.Required;
    DeskripsiPekerjaan: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lowongan-kerja.lowongan-kerja'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiPenulisArtikelPenulisArtikel
  extends Struct.CollectionTypeSchema {
  collectionName: 'penulis_artikels';
  info: {
    singularName: 'penulis-artikel';
    pluralName: 'penulis-artikels';
    displayName: 'PenulisArtikel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    NamaPenulis: Schema.Attribute.String & Schema.Attribute.Required;
    RolePenulis: Schema.Attribute.String;
    EmailPenulis: Schema.Attribute.Email;
    TotalViewPenulis: Schema.Attribute.Integer & Schema.Attribute.Private;
    artikels: Schema.Attribute.Relation<'oneToMany', 'api::artikel.artikel'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::penulis-artikel.penulis-artikel'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiPrinsipSectionPrinsipSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'prinsip_sections';
  info: {
    singularName: 'prinsip-section';
    pluralName: 'prinsip-sections';
    displayName: 'PrinsipSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PrinsipTitle: Schema.Attribute.String & Schema.Attribute.Required;
    PrinsipSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    PrinsipImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::prinsip-section.prinsip-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiSyaratKetentuanSyaratKetentuan
  extends Struct.CollectionTypeSchema {
  collectionName: 'syarat_ketentuans';
  info: {
    singularName: 'syarat-ketentuan';
    pluralName: 'syarat-ketentuans';
    displayName: 'SyaratKetentuan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SubtitleSyaratKetentuan: Schema.Attribute.String;
    UpdatedSyaratKetentuan: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'2024-10-25'>;
    PoinIntiPerubahanSyaratKetentuan: Schema.Attribute.String &
      Schema.Attribute.Required;
    DetailSyaratKetentuan: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::syarat-ketentuan.syarat-ketentuan'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiTagArtikelTagArtikel extends Struct.CollectionTypeSchema {
  collectionName: 'tag_artikels';
  info: {
    singularName: 'tag-artikel';
    pluralName: 'tag-artikels';
    displayName: 'TagArtikel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    NamaTag: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    artikels: Schema.Attribute.Relation<'manyToMany', 'api::artikel.artikel'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tag-artikel.tag-artikel'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiTentangKamiHeroSectionTentangKamiHeroSection
  extends Struct.SingleTypeSchema {
  collectionName: 'tentang_kami_hero_sections';
  info: {
    singularName: 'tentang-kami-hero-section';
    pluralName: 'tentang-kami-hero-sections';
    displayName: 'TentangKamiHeroSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TentangKamiTitle: Schema.Attribute.String & Schema.Attribute.Required;
    TentangKamiSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    TentangKamiImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tentang-kami-hero-section.tentang-kami-hero-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiVisiSectionVisiSection extends Struct.SingleTypeSchema {
  collectionName: 'visi_sections';
  info: {
    singularName: 'visi-section';
    pluralName: 'visi-sections';
    displayName: 'VisiSection';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    GeneralVisiMisiTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Visi & Misi Kami'>;
    VisiTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Visi'>;
    MisiTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Misi'>;
    VisiButton: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Visi'>;
    MisiButton: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Misi'>;
    VisiDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    VisiIcon: Schema.Attribute.Media<'images' | 'files'>;
    MisiIcon: Schema.Attribute.Media<'images'>;
    MisiSection: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::visi-section.visi-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface ApiWhoAreWeSectionWhoAreWeSection
  extends Struct.SingleTypeSchema {
  collectionName: 'who_are_we_sections';
  info: {
    singularName: 'who-are-we-section';
    pluralName: 'who-are-we-sections';
    displayName: 'WhoAreWeSection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    WhoAreWeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    WhoAreWeSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    WhoAreWeIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::who-are-we-section.who-are-we-section'
    > &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::artikel.artikel': ApiArtikelArtikel;
      'api::beranda-hero-section.beranda-hero-section': ApiBerandaHeroSectionBerandaHeroSection;
      'api::cara-pesan.cara-pesan': ApiCaraPesanCaraPesan;
      'api::download-section.download-section': ApiDownloadSectionDownloadSection;
      'api::faq-mitra.faq-mitra': ApiFaqMitraFaqMitra;
      'api::faq-user.faq-user': ApiFaqUserFaqUser;
      'api::hubungi-kami-section.hubungi-kami-section': ApiHubungiKamiSectionHubungiKamiSection;
      'api::karir-alasan-bergabung-list-section.karir-alasan-bergabung-list-section': ApiKarirAlasanBergabungListSectionKarirAlasanBergabungListSection;
      'api::karir-alasan-bergabung-section.karir-alasan-bergabung-section': ApiKarirAlasanBergabungSectionKarirAlasanBergabungSection;
      'api::karir-hero-section.karir-hero-section': ApiKarirHeroSectionKarirHeroSection;
      'api::kategori-artikel.kategori-artikel': ApiKategoriArtikelKategoriArtikel;
      'api::kategori-layanan.kategori-layanan': ApiKategoriLayananKategoriLayanan;
      'api::kebijakan-privasi.kebijakan-privasi': ApiKebijakanPrivasiKebijakanPrivasi;
      'api::kenapa-memilih-kami-section.kenapa-memilih-kami-section': ApiKenapaMemilihKamiSectionKenapaMemilihKamiSection;
      'api::kontak-section.kontak-section': ApiKontakSectionKontakSection;
      'api::layanan.layanan': ApiLayananLayanan;
      'api::layanan-hero-section.layanan-hero-section': ApiLayananHeroSectionLayananHeroSection;
      'api::lokasi-layanan-section.lokasi-layanan-section': ApiLokasiLayananSectionLokasiLayananSection;
      'api::lowongan-kerja.lowongan-kerja': ApiLowonganKerjaLowonganKerja;
      'api::penulis-artikel.penulis-artikel': ApiPenulisArtikelPenulisArtikel;
      'api::prinsip-section.prinsip-section': ApiPrinsipSectionPrinsipSection;
      'api::syarat-ketentuan.syarat-ketentuan': ApiSyaratKetentuanSyaratKetentuan;
      'api::tag-artikel.tag-artikel': ApiTagArtikelTagArtikel;
      'api::tentang-kami-hero-section.tentang-kami-hero-section': ApiTentangKamiHeroSectionTentangKamiHeroSection;
      'api::visi-section.visi-section': ApiVisiSectionVisiSection;
      'api::who-are-we-section.who-are-we-section': ApiWhoAreWeSectionWhoAreWeSection;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
