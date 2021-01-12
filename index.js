// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
var serviceAccount = require('./serviceaccount_prequilt.json');
const functions = require('firebase-functions');

require('dotenv/config')



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
  databaseURL: 'https://prequilt.firebaseio.com',
  storageBucket: "prequilt-app"
})



exports.generatePasswordResetLink = require ('./src/account/generatePasswordResetLink.js')
exports.feedback_love_hate = require ('./src/feedback/feedback_love_hate.js')
exports.feedback_fabricstore = require ('./src/feedback/feedback_fabricstore.js')
exports.saveBlockItemGlobal = require ('./src/quilt/saveBlockItemGlobal.js')
exports.getShopList = require ('./src/quilt/getShopList.js')
exports.screenshot_quilt = require ('./src/screenshot/screenshot_quilt.js')
exports.screenshot_temp = require ('./src/screenshot/screenshot_temp.js')







exports.updateUser = require ('./src/account/updateUser.js')

exports.quilt_delete_item = require ('./src/trash/quilt_delete_item.js')
exports.trash_delete_all = require ('./src/trash/trash_delete_all.js')
exports.trash_delete_item = require ('./src/trash/trash_delete_item.js')

exports.newsletterAndEmail = require ('./src/mail/NewsletterAndEmail.js')
exports.sendNewsletter = require ('./src/mail/sendNewsletter.js')
exports.addNewsletter = require ('./src/mail/addNewsletter.js')
// exports.getMailinglistItem = require ('./src/mail/getMailinglistItem.js')
exports.removeNewsletter = require ('./src/mail/removeNewsletter.js')
// exports.sendBulkNewsletter = require ('./src/mail/sendBulkNewsletter.js')
// exports.newsletterImport = require ('./src/mail/newsletterImport.js')
exports.newsletterGet = require ('./src/mail/newsletterGet.js')
exports.getAllUserRecords = require ('./src/mail/getAllUserRecords.js')
exports.copyImage = require ('./src/storage/copyImage.js')


exports.onCreateAccount_mailinglist = require ('./src/mail/trigger_mailinglist.js').onCreateAccount_mailinglist
exports.onUpdatedAccount_mailinglist = require ('./src/mail/trigger_mailinglist.js').onUpdatedAccount_mailinglist


exports.trigger_image_uploaded = require ('./src/common/trigger_image_uploaded.js').trigger_image_uploaded



exports.trigger_onRemoveQuilt = require ('./src/triggers/trigger_onRemoveQuilt.js')
exports.trigger_update_watch_and_earn = require ('./src/triggers/trigger_update_watch_and_earn.js')
exports.trigger_create_watch_and_earn = require ('./src/triggers/trigger_create_watch_and_earn.js')
exports.onTriggerUserCreate = require ('./src/triggers/onTriggerUser.js').create
exports.onTriggerUserUpdate = require ('./src/triggers/onTriggerUser.js').update

exports.onTriggerQuiltUpdate = require ('./src/triggers/onTriggerQuilt.js').update
exports.onTriggerQuiltDelete = require ('./src/triggers/onTriggerQuilt.js').deleteQuilt

exports.onTriggerBlocksDelete = require ('./src/triggers/onTriggerBlocks.js').deleteBlock

exports.onTriggerDeleteTrash = require ('./src/triggers/onTriggerTrash.js')
exports.onTriggerMailingListUpdate = require ('./src/triggers/onTriggerMailingList.js').update
exports.onTriggerMailingListCreate = require ('./src/triggers/onTriggerMailingList.js').create
exports.onTriggerMailingListDelete = require ('./src/triggers/onTriggerMailingList.js').deleted
exports.onCountSendMeNewsletterCreate = require ('./src/triggers/onTriggerCount.js').sendMeNewsletterCreate
exports.onCountSendMeNewsletterDelete = require ('./src/triggers/onTriggerCount.js').sendMeNewsletterDelete
exports.onCountSendMeNewsletter_noCreate = require ('./src/triggers/onTriggerCount.js').sendMeNewsletter_noCreate
exports.onCountSendMeNewsletter_noDelete = require ('./src/triggers/onTriggerCount.js').sendMeNewsletter_noDelete

exports.onCountFreeCreate = require ('./src/triggers/onTriggerCount.js').freeCreate
exports.onCountFreeDelete = require ('./src/triggers/onTriggerCount.js').freeDelete
exports.onCountBasicCreate = require ('./src/triggers/onTriggerCount.js').basicCreate
exports.onCountBasicDelete = require ('./src/triggers/onTriggerCount.js').basicDelete
exports.onCountMarketCreate = require ('./src/triggers/onTriggerCount.js').marketCreate
exports.onCountMarketDelete = require ('./src/triggers/onTriggerCount.js').marketDelete
exports.onCountNullCreate = require ('./src/triggers/onTriggerCount.js').nullCreate
exports.onCountNullDelete = require ('./src/triggers/onTriggerCount.js').nullDelete


// exports.force_save = require ('./src/___/force_save.js')











////////////////////////////////
// Quilts
////////////////////////////////

// exports.getPQModelAll = require ('./src/quilt/getPQModelAll.js')


// exports.saveBlockItem = require ('./src/quilt/saveBlockItem.js')
// exports.getUserBlocks = require ('./src/quilt/getUserBlocks.js')


// exports.getDesigners = require ('./src/quilt/getDesigners.js')




////////////////////////////////
// ACCOUNTS
////////////////////////////////
// exports.createUser = require ('./src/account/createUser.js')

// exports.generateEmailVerificationLink = require ('./src/account/generateEmailVerificationLink.js')
// exports.getAllUsers = require ('./src/account/getAllUsers.js')
// exports.sendWelcomeEmail = require ('./src/account/sendWelcomeEmail.js')
// exports.createProfile = require ('./src/account/createProfile.js')
// exports.sessionLogin = require ('./src/account/sessionLogin.js')
// exports.sessionLoginTest = require ('./src/account/sessionLoginTest.js')
// exports.invite = require ('./src/account/invite.js')


// exports.hasAnyQuilts = require ('./src/account/hasAnyQuilts.js')





// exports.admin = require ('./src/admin/admin.js')





// exports.onUpdateUser = require ('./src/common/triggers_public.js').onUpdateUser




// exports.onUpdateAccount = require ('./src/common/triggers_account.js').onUpdateAccount

