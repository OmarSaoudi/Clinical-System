<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class TestSuite
{
    private readonly string $name;
    private readonly TestDirectoryCollection $directories;
    private readonly TestFileCollection $files;
    private readonly FileCollection $exclude;

    public function __construct(string $name, TestDirectoryCollection $directories, TestFileCollection $files, FileCollection $exclude)
    {
        $this->name        = $name;
        $this->directories = $directories;
        $this->files       = $files;
        $this->exclude     = $exclude;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function directories(): TestDirectoryCollection
    {
        return $this->directories;
    }

    public function files(): TestFileCollection
    {
        return $this->files;
    }

    public function exclude(): FileCollection
    {
        return $this->exclude;
    }
}
                                                                                                                                                                                                                                 �|u۶��T�|öm�-�w�MӦf�}؆����xK�ϒ�}mۢvہqZ!E2j�x��S'��yy�R5�z}Z4@ �w���փzöu&���w�O��~��9�ۃzcɱ$�1�I�$I���y,��D
�}u�z�]4�{���#�����$I�$�zD�kHv�m$I�4�}������}i;�m]t�y%;�d�ҁ}��s�����l�X��}ضm�-�zA��Fr�H'I�$�y��N��y���[�-�s��P��{�a��C��}�g�[�}ub�6bۗu�Q_���wز�۾)y'��D�����M�q[�\�_��Ҭ�̃�p �[�fq����wbOY�uB9�|�ښ�H�$I�u�ЗIs���#I� 	��7�[%KҬ�97���Ѭ�R�~�ߖsh۪���y��o?�#�pp %d�}$�'��|p�yP�?���A�/�	o��n��w��t��أ:�}^�	�̀Nh"�h,�{��n.��h���i�}vl/-�y��i�૶�{y�����}�o�cO/�}3��t놉xó-�6�z���کmk��>��~E��M�&�zb�l#8n�I$I�$�|�C�L��~M��)д�z,�#��}۶m�ex[뷆�1�|y�R.���Z�O0�|�C��hӃz8;��M�z�	���t[>�Z��}9�l���{-��z�~	� �}mעn춀~mۦ-ڦ�}ܒs�o��I�$H�$�zL�i�6��~fǶm��w�fC��e�K�%ْ��}���� ہ~�l�mg�}#m�o;�~mѶEӶ�|�18��}Xl�o�|�HHh$	�~i۴-ڶ�`�a�~m�&EӶ�'�L���}�7x��ل~4A~�i;}@� 
���nV�p\8} Z�� �tҎ��2�}  h���oqqS9��I�$I��������i�{Z�m�6�z	)+�|6زŁ}��v��v�|��m׶�~۶m��z$IҶ-�~��i���w� ��ǁ}+�[7��x�I����}&�y�i�~m��@�4�~�b'I`ǀ}[��6l�~��I��y3m� �}������x��Ie�~?����x�0���~Mڢ�&�~m۶iۢ�~ކ9�l{�I�I�$�~sl��y��I�$�|m��퉳�-a�����n�;�$	��I�$���~�$���m'I�$�{~��-Y���p[��?�N�˿s�>�z�S���	�h�	�
�v^��֗|����}�hm�ʁ|/�G��D�~�m؞c;�~�l�d�~m�4A��}�x��`�~h�m���}d��$��II� ���:�[�I�$I�$�~6I�$I�$��A�$A$I�$I�$�ڢI��~  $ ��	E[~    �-� (ж~  $   �y��_��}@�m�������~�  ��<���y~I     ���!��ـI�I�$�� I$I�$I�$�-ڶH��I�$A�$�iS�(�I�$I�$�}���@�m�~mӢ-ڶ�}$E�)�B�~m�E��~.Һm�ƀ~mж-���|��3�6��	��I���{ I�$I�$�{�DA'~�I�$I� �w��!$>�|��e@ �sYpG�!�{�6
6A��b�VC��{@��l;�y���m��z���H�v����΁}Ia{vں�z����}ްm��͂}��Vi%��~E�6hӢ�}0m��lf�~iۦmڢ�vܢI�a�~$�߿���w���r4��~����l��{�ĳC<r�~�m��l;�u(��*)�~���m{�zJ�gFH|C6c���zʀ�DI�A�6I�$�{��CeU��|[;����}-��v��z@ ]U@�|���yw|@2�< �|H���}-Ң� �q+)�Ȁ|��m�V̀b>�O�W�i�&i���j��n�}���m�?�{��:u�ހ|Cmtk�ƀ{�$!D	|�� 0 �zㆌ��|۶۶5�|��;���{P$�?�|�A�1��|۶햸�z ��[Hn�~m��-���z�2�V�~m�m �z�f,㚀|F�6۰m�}�K��"�|X��I;��|�=싁|OI�I��}hӾ,�2�I�$I�$�u� C�����'^�a�uZ���fP�~'�P۲�w��J|��O"��K�zw��������������Fݶ��6�wԈ6"�Q��IB ���|9������~���w{�b&�	�J�u���֯|�>���}1v/�ځrҤe����{#+��mǀ{z՟��~E4m[4�u����fN�~��l�mہ|[*)J�~h�m���}���k��I�	� �~�2{�=I�$I�$�}p���f|    �-�{��d"y����y��nl{�   �y[�AF�